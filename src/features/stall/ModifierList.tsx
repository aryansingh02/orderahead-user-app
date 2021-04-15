import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Currency from 'react-currency-formatter';
import { IModifier } from '../../types';
import Typography from '../../Typography';

interface IProps {
  options: IModifier[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
  })
);

export default function ModifierList(props: IProps) {
  console.log(props.options);
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      if (newChecked.length > 1) {
        return;
      }
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List className={classes.root} dense disablePadding>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            role={undefined}
            dense
            button
            onClick={handleToggle(value)}
            disableGutters
          >
            <ListItemIcon style={{ minWidth: '0px' }}>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                color="primary"
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={
                <Typography robot variant="body2">
                  Zesty Lime
                </Typography>
              }
            />
            <div>
              <Typography roboto>
                <Currency quantity={0.0} currency="USD" />
              </Typography>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
}
