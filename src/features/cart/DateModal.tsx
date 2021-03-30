import React, {Fragment} from "react";
import {Modal} from "react-bootstrap";
import SlotModal from "../store/SlotModal";
import styled from "styled-components";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {GenerateEpochDate} from "../../util";

export const DateModal = (props) => {
  const {
    dateModal,
    pickup,
    pickupSlot,
    itemEta,
    onSlotClick,
    rhState,
    updateState,
  } = props;

  const renderDatePicker = () => {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          variant="static"
          initialFocusedDate={null}
          value={
            new Date(
              // $FlowFixMe
              pickup ? pickup : Date.parse(new Date())
            )
          }
          onChange={(dt) => {
            updateState({pickup: GenerateEpochDate(dt), pickupSlot: null});
          }}
          disablePast
          open={dateModal}
          onClose={() => {
            updateState({dateModal: false});
          }}
          onOpen={() => {
            updateState({dateModal: true});
          }}
          minutesStep={1}
          minDate={new Date()}
        />
      </MuiPickersUtilsProvider>
    );
  };
  return (
    <Fragment>
      <Modal
        show={dateModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="rounded-0 "
        onHide={() => {
          updateState({dateModal: false, pickUp: 0});
        }}
      >
        <Modal.Body className="rounded-0 date-modal">
          <div className="container p-0">
            {!rhState.startTime && renderDatePicker()}
            <SlotWrapper>
              {!!pickup && (
                <SlotModal
                  pickup={pickup}
                  pickupSlot={pickupSlot}
                  clickHandler={onSlotClick}
                  itemEta={itemEta}
                />
              )}
            </SlotWrapper>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

const SlotWrapper = styled.div`
  margin-top: 20px;
`;