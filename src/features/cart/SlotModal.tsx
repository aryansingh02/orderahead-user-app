import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import config from "react-global-configuration";
import { format } from "date-fns";

import { appConfig, stall as Stall, slotsInfo } from '../../data/testData';
import { ISlotsInfo } from '../../types';

interface IProps {
  // pickup: Date;
  itemEta: number;
  clickHandler: (slot: number) => void;
  pickupSlot: Date;
}

const SlotModal = (props:IProps) => {
  const stall = Stall;
  const { rhState } = appConfig;

  // useEffect(() => {
  //   const fetchSlots = async () => {
  //     let url = `/stall/${stall._id}/available-slots?startTime=`;
  //     if (rhState.startTime) {
  //       url += rhState.startTime;
  //     } else {
  //       url += props.pickup;
  //     }
  //     if (rhState.endTime) {
  //       url += `&endTime=${rhState.endTime}`;
  //     }
  //
  //     const response = await fetch(config.get("backend") + url);
  //     const slots: typeof slotsInfo = await response.json();
  //     setSlotsInfo(slots);
  //   };
  //   if (stall._id && props.pickup) {
  //     fetchSlots();
  //   }
  // }, [stall._id, props.pickup, rhState.startTime, rhState.endTime]);

  const renderSlots = () => {
    const minTime = Date.now() + props.itemEta * 60 * 1000;
    const filteredSlots = slotsInfo;
    console.log('filtered slots', slotsInfo);

    return filteredSlots.map((slotInfo) => (
      <Dropdown.Item
        key={slotInfo.slot}
        disabled={!slotInfo.isAvailable}
        onClick={() => {
          if (slotInfo.isAvailable) {
            props.clickHandler(slotInfo.slot);
          }
        }}
        style={{
          textDecoration: slotInfo.isAvailable ? "none" : "line-through",
        }}
      >
        {format(new Date(slotInfo.slot), "PPp")}
      </Dropdown.Item>
    ));
  };
  return (
    <Wrapper>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          {props.pickupSlot
            ? format(new Date(props.pickupSlot), "PPp")
            : "Choose Pickup Time"}
        </Dropdown.Toggle>

        <Dropdown.Menu>{renderSlots()}</Dropdown.Menu>
      </Dropdown>
    </Wrapper>
  );
};

export default SlotModal;

const Wrapper = styled.div``;
