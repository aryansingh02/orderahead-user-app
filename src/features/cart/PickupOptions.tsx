import React, { Fragment } from 'react';
import Radio from '@material-ui/core/Radio';
import config from 'react-global-configuration';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { format } from 'date-fns';
import { IconContext } from 'react-icons';
import { IoFlashSharp, MdModeEdit } from 'react-icons/all';
import PeopleIcon from '@material-ui/icons/People';
import styled from 'styled-components';
import { GenerateCurrencyNumber, GenerateEpochDate } from '../../utils';
import { FullfilmentModeType, zeroFee } from './Cart';
import { IPrice } from '../../types';
import Typography from '../../Typography';
import { theme as customTheme } from '../../theme';

interface IProps {
  enableSurgeFee: boolean;
  dynamicEta: number;
  dynamicFee: IPrice;
  handleClose: (dynamicFee: IPrice, dynamicEta: number) => void;
  updateState: ({
    mode,
    dateModal,
    pickupSlot,
    pickup,
  }: {
    mode?: string;
    dateModal?: boolean;
    pickupSlot?: Date;
    pickup?: Date;
  }) => void;
  itemEta: number;
  dateModal?: boolean;
  pickupSlot?: Date;
  mode?: string;
  pickup?: Date | number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pickupIcon: {
      paddingRight: theme.spacing(1.25),
    },
    pickupText: {
      marginTop: '20px',
      marginBottom:'20px'
    },
    pickupRow: {
      padding: '10px',
      marginBottom: '5px',
      border: '1px solid',
      borderRadius: '6px',
    },
    pickupRoot: {
      paddingBottom: '10px',
      borderBottom: 'solid 1px #E3E3E3'
    },
    skipRow: (props) => ({
      // @ts-ignore
      borderColor: props.skipActive
        ? theme.palette.primary.main
        : 'transparent',
    }),
    freeRow: (props) => ({
      // @ts-ignore
      borderColor: props.freeActive
        ? theme.palette.primary.main
        : 'transparent',
    }),
    scheduledRow: (props) => ({
      // @ts-ignore
      borderColor: props.scheduledActive
        ? theme.palette.primary.main
        : 'transparent',
    }),
  })
);

export const PickupOptions = (props: IProps) => {
  const {
    enableSurgeFee,
    dynamicEta,
    dynamicFee,
    handleClose,
    updateState,
    itemEta,
    dateModal,
    pickupSlot,
    mode,
    pickup,
  } = props;
  // @ts-ignore
  const styleProps = {
    scheduleActive: mode === FullfilmentModeType.SCHEDULED_PICKUP,
    skipActive: mode === FullfilmentModeType.SKIP_THE_LINE,
    freeActive: mode === FullfilmentModeType.FREE_PICKUP,
  };
  const classes = useStyles(styleProps);

  return (
    (enableSurgeFee || config.get('schedule_payment')) && (
      <Grid container direction="row" className={classes.pickupRoot}>
        <Grid item xs={12} className={classes.pickupText}>
          <Typography variant="h4" roboto={true}>
            Pickup
          </Typography>
        </Grid>
        {enableSurgeFee && (
          <Grid
            className={`${classes.pickupRow} ${classes.skipRow}`}
            item
            container
            xs={12}
            direction="row"
            alignItems="center"
          >
            <Grid
              item
              xs={2}
              onClick={() => {
                handleClose(dynamicFee, dynamicEta);
                updateState({
                  mode: FullfilmentModeType.SKIP_THE_LINE,
                  pickupSlot: undefined,
                });
              }}
            >
              <Radio
                checked={mode === FullfilmentModeType.SKIP_THE_LINE}
                onChange={() => {}}
                value="dymaic radio"
                name="dynamic radio"
                inputProps={{ 'aria-label': 'A' }}
                color="primary"
              />
            </Grid>
            <Grid item xs={7} container direction="column">
              <Typography
                variant="body2"
                style={{ fontWeight: 'bold' }}
                roboto={true}
              >
                Queue 2min
              </Typography>
              <Typography variant="overline" roboto={true}>
                Skip the line
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              container
              direction="row"
              className="endJustifiedFlex"
              style={{ alignItems: 'center' }}
            >
              <IconContext.Provider
                value={{
                  color: customTheme.palette.primary.main,
                  className: 'global-class-name',
                }}
              >
                <IoFlashSharp className={classes.pickupIcon} />
              </IconContext.Provider>
              <Typography variant="body1" roboto={true}>
                {GenerateCurrencyNumber(dynamicFee)}
              </Typography>
            </Grid>
          </Grid>
        )}
        <Grid
          className={`${classes.pickupRow} ${classes.freeRow}`}
          item
          container
          xs={12}
          direction="row"
          alignItems="center"
        >
          <Grid
            item
            xs={2}
            onClick={() => {
              handleClose(zeroFee, itemEta);
              updateState({
                mode: FullfilmentModeType.FREE_PICKUP,
                pickupSlot: undefined,
              });
            }}
          >
            <Radio
              checked={mode === FullfilmentModeType.FREE_PICKUP}
              onChange={() => {}}
              value="free radio"
              name="free radio"
              inputProps={{ 'aria-label': 'A' }}
              color="primary"
            />
          </Grid>
          <Grid item xs={7} container direction="column">
            <Grid item container direction="row">
              <Typography
                variant="body2"
                style={{ fontWeight: 'bold' }}
                roboto={true}
              >
                Queue
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontWeight: 'bold',
                  color: customTheme.palette.error.main,
                  marginLeft: '2px',
                }}
              >
                {itemEta} minutes
              </Typography>
            </Grid>

            <Typography variant="overline" roboto={true}>
              Standard Line
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            container
            direction="row"
            className="endJustifiedFlex"
            style={{ alignItems: 'center' }}
          >
            <PeopleIcon color="error" className={`${classes.pickupIcon}`} />
            <Typography variant="body1" roboto={true}>
              {GenerateCurrencyNumber(dynamicFee)}
            </Typography>
          </Grid>
        </Grid>
        {config.get('schedule_payment') && (
          <Grid
            className={`${classes.pickupRow} ${classes.scheduledRow}`}
            item
            container
            xs={12}
            direction="row"
            alignItems="center"
          >
            <Grid
              item
              xs={2}
              onClick={() => {
                handleClose(zeroFee, itemEta);
                updateState({
                  mode: FullfilmentModeType.SCHEDULED_PICKUP,
                  dateModal: true,
                  // @ts-ignore
                  pickup: GenerateEpochDate(new Date()),
                });
              }}
            >
              <Radio
                checked={mode === FullfilmentModeType.SCHEDULED_PICKUP}
                onChange={() => {}}
                value="scheduled radio"
                name="scheduled radio"
                inputProps={{ 'aria-label': 'A' }}
                color="primary"
              />
            </Grid>
            <Grid item xs={7} container direction="column">
              <Typography
                variant="body2"
                style={{ fontWeight: 'bold' }}
                roboto={true}
              >
                Schedule Pickup
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              container
              direction="row"
              className="endJustifiedFlex"
              style={{ alignItems: 'center' }}
            >
              <Typography variant="body1" roboto={true}>
                $0.00
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    )
  );
};



