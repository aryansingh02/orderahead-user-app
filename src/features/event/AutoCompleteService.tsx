import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import InputBase from '@material-ui/core/InputBase';
import get from 'lodash/get';
import IconButton from '@material-ui/core/IconButton';
import { isDesktop } from '../../utils';
import { initDetailsMap } from '../../mapUtils';
import { getLocation, setLocation } from './EventSlice';
import { ILocation } from '../../types';

type AutocompletePrediction = google.maps.places.AutocompletePrediction;
const autocompleteService: {
  current: null | google.maps.places.AutocompleteService;
} = { current: null };

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  iconButton: {
    padding: 10,
  },
  optionContainer: {
    background: '#FFFFFF',
  },
  optionRow: {
    height: '80px',
  },
  textInput: {
    height: 'auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  InputContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
}));

export interface IProps {}

const GoogleMaps = (props: IProps) => {
  const classes = useStyles();
  const locationData = useSelector(getLocation);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<null | AutocompletePrediction>(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState<
  (AutocompletePrediction | null)[]
  >([]);

  const selectLocation = (item: ILocation) => {
    dispatch(setLocation({ location: item }));
  };

  const loadData = async (placeId: string) => {
    const result = await initDetailsMap(placeId);
    const lng = result.geometry?.location.lng();
    const lat = result.geometry?.location.lat();
    selectLocation({ lat, lng, place: result });
  };

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        if (get(autocompleteService, 'current.getPlacePredictions')) {
          autocompleteService.current!.getPlacePredictions(request, callback);
        }
      }, 200),
    []
  );

  React.useEffect(() => {
    let active = true;
    if (!autocompleteService.current && window.google) {
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch(
      { input: inputValue },
      (results: google.maps.places.AutocompletePrediction[]) => {
        if (active) {
          let newOptions: (google.maps.places.AutocompletePrediction | null)[] = [];

          if (value) {
            newOptions = [value];
          }

          if (results) {
            newOptions = [...newOptions, ...results];
          }
          setOptions(newOptions);
        }
      }
    );

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Autocomplete
          fullWidth
          getOptionLabel={(option) =>
            typeof option === 'string' ? option : option!.description
          }
          onChange={(event, newValue) => {
            setOptions(newValue ? [newValue, ...options] : options);
            setValue(newValue);
          }}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          value={value}
          style={{ width: '100%' }}
          options={options}
          includeInputInList
          filterSelectedOptions
          renderInput={(params) => (
            <Grid container>
              <Grid
                container
                direction="row"
                className={classes.InputContainer}
                ref={params.InputProps.ref}
              >
                <IconButton className={classes.iconButton} aria-label="menu">
                  <img src="/img/search_adorn_start.png" />
                </IconButton>
                <InputBase
                  className={classes.textInput}
                  placeholder={
                    get(locationData, 'place.formatted_address') ||
                    'Times Square, Manhattan, NY...'
                  }
                  {...params.inputProps}
                />
                {!isDesktop() && (
                  <IconButton
                    type="submit"
                    className={classes.iconButton}
                    aria-label="search"
                  >
                    <img src="/img/input_adorn_end.png" />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          )}
          renderOption={(option) => {
            const matches = option!.structured_formatting
              .main_text_matched_substrings;
            const parts = parse(
              option!.structured_formatting.main_text,
              matches.map((match) => [
                match.offset,
                match.offset + match.length,
              ])
            );
            return (
              <Grid
                onClick={() => {
                  loadData(option!.place_id);
                }}
                container
                item
                xs={12}
                alignItems="center"
                className={classes.optionRow}
              >
                <Grid item>
                  <LocationOnIcon className={classes.icon} />
                </Grid>
                <Grid item xs>
                  {parts.map(
                    (
                      part: {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        highlight: any;
                        text:
                        | boolean
                        | React.ReactChild
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined;
                      },
                      index: React.Key | null | undefined
                    ) => (
                      <span
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        style={{ fontWeight: part.highlight ? 700 : 400 }}
                      >
                        {part.text}
                      </span>
                    )
                  )}

                  <Typography variant="body2" color="textSecondary">
                    {option!.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            );
          }}
        />
      </Grid>
    </Grid>
  );
};

export default GoogleMaps;
