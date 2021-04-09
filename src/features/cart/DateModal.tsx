import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import CloseIcon from '@material-ui/icons/Close';
import { Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import Modal from '@material-ui/core/Modal';
import SlotModal from './SlotModal';
import { GenerateEpochDate } from '../../utils';
import { appConfig } from '../../data/testData';

interface IProps {
  dateModal?: boolean;
  pickup?: Date;
  pickupSlot: Date;
  itemEta: number;
  onSlotClick: (slot: Date) => void;
  rhState: typeof appConfig.rhState;
  updateState: ({
    dateModal,
    pickupSlot,
    pickup,
  }: {
    dateModal?: boolean;
    pickupSlot?: Date;
    pickup?: Date;
  }) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modalRoot: {
      width: '100%',
      position: 'relative',
      borderRadius: '10px',
    },
    container: {
      background: '#FFFFFF',
      height: '475px',
      maxWidth: '394px',
      margin: 'auto',
      top: '50%',
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    modalContainer: {
      width: '90%',
    },
  })
);

export const DateModal = (props: IProps) => {
  const classes = useStyles();
  const {
    dateModal,
    pickup,
    pickupSlot,
    itemEta,
    onSlotClick,
    rhState,
    updateState,
  } = props;

  const renderDatePicker = () => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        variant="static"
        initialFocusedDate={null}
        disableToolbar={true}
        value={
          new Date(
            // @ts-ignore
            pickup || Date.parse(new Date())
          )
        }
        onChange={(dt) => {
          // @ts-ignore
          updateState({ pickup: GenerateEpochDate(dt), pickupSlot: undefined });
        }}
        disablePast
        open={dateModal}
        onClose={() => {
          updateState({ dateModal: false });
        }}
        onOpen={() => {
          updateState({ dateModal: true });
        }}
        // @ts-ignore
        minutesStep={1}
        minDate={new Date()}
      />
    </MuiPickersUtilsProvider>
  );
  return (
    <Grid
      container
      direction="column"
      className={classes.modalContainer}
      alignItems="center"
    >
      <Grid item xs={11}>
        <Modal
          open={!!dateModal}
          onClose={() => {
            updateState({ dateModal: false, pickup: undefined });
          }}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modalRoot}
        >
          <Grid
            container
            direction="row"
            className={classes.container}
            justify="center"
          >
            <Grid
              item
              container
              direction="row"
              xs={11}
              justify='flex-end'
              alignItems='center'
            >
              <CloseIcon
                onClick={() => {
                  updateState({ dateModal: false, pickup: undefined });
                }}
                className='pointer'
              />
            </Grid>
            <Grid item xs={12} container justify='center'>
              {' '}
              {!rhState.startTime && renderDatePicker()}
            </Grid>
            <Grid item xs={11}>
              {!!pickup && (
                <SlotModal
                  // pickup={pickup}
                  pickupSlot={pickupSlot}
                  // @ts-ignore
                  clickHandler={onSlotClick}
                  itemEta={itemEta}
                />
              )}
            </Grid>
          </Grid>
        </Modal>
      </Grid>
    </Grid>
  );
};
