import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Chip, Divider } from '@material-ui/core';
import Typography from '../../Typography';
import ModifierList from './ModifierList';
import { IModifier, IVariation } from '../../types';
import Variations from './Variations';

interface IProps {
  name: string;
  options?: IModifier[];
  callingParent: string;
  variations?: IVariation[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },

    accordianstyle: {
      border: 'none',
      boxShadow: 'none',
      backgroundColor: 'inherit',
    },
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    listItems: {
      padding: '0px 0px',
    },
    summary: {
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  })
);

export default function Modifiers(props: IProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion
        className={classes.accordianstyle}
        defaultExpanded={props.callingParent !== 'Modifiers'}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.summary}
        >
          <Typography variant="h4">{props.name}</Typography>
          {props.callingParent === 'Modifiers' ? (
            <Chip
              variant="outlined"
              color="secondary"
              size="small"
              label="Min-0, Max-2"
            />
          ) : (
            <Chip
              variant="outlined"
              color="secondary"
              size="small"
              label="Required "
            />
          )}
        </AccordionSummary>
        <AccordionDetails className={classes.listItems}>
          {props.callingParent === 'Modifiers' ? (
            <ModifierList options={props.options!} />
          ) : (
            <Variations variations={props.variations!} />
          )}
        </AccordionDetails>
      </Accordion>
      <Divider light className={classes.divider} />
    </div>
  );
}
