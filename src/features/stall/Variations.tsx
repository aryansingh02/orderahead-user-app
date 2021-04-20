import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Currency from 'react-currency-formatter';
import { Radio } from '@material-ui/core';
import { IVariation } from '../../types';
import Typography from '../../Typography';

interface IProps {
  variations: IVariation[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    radio: {
      '&$checked': {
        color: theme.palette.primary.main,
      },
      paddingLeft: '0px',
    },
    checked: {},
  })
);

export default function Variations(props: IProps) {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('');
  const { variations } = props;
  const handleClick = (id: string) => () => {
    setSelectedValue(id);
  };

  return (
    <List className={classes.root} dense disablePadding>
      {variations.map((variation) => {
        const labelId = `checkbox-list-label-${variation.name}`;

        return (
          <ListItem
            key={variation.name}
            role={undefined}
            dense
            button
            onClick={handleClick(variation._id)}
            disableGutters
          >
            <ListItemIcon style={{ minWidth: '0px' }}>
              <Radio
                checked={selectedValue === variation._id}
                onChange={handleClick(variation._id)}
                value="d"
                color="default"
                name="radio-button-demo"
                inputProps={{ 'aria-label': variation.name }}
                classes={{ root: classes.radio, checked: classes.checked }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={
                <Typography robot variant="body2">
                  {variation.name}
                </Typography>
              }
            />
            <div>
              <Typography roboto>
                <Currency
                  quantity={variation.price.amount / 100}
                  currency={variation.price.currency}
                />
              </Typography>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
}
