import React, { Fragment } from 'react';
import styled from 'styled-components';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
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
      background: '#FFFFFF',
      height: '100%'
    },
    container: {
      background: '#FFFFFF',
      height: '100%'
    }
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
    <>
      <Modal
        open={!!dateModal}
        onClose={() => {
          updateState({ dateModal: false, pickup: undefined });
        }}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modalRoot}
      >
        <Grid container direction='column' className={classes.container}>
          {!rhState.startTime && renderDatePicker()}
          <SlotWrapper>
            {!!pickup && (
              <SlotModal
                // pickup={pickup}
                pickupSlot={pickupSlot}
                // @ts-ignore
                clickHandler={onSlotClick}
                itemEta={itemEta}
              />
            )}
          </SlotWrapper>
        </Grid>
      </Modal>
    </>
  );
};

const SlotWrapper = styled.div`
  margin-top: 20px;
`;
