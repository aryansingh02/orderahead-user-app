import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import { format } from 'date-fns';
import { Grid } from '@material-ui/core';
import { appConfig, stall as Stall, slotsInfo } from '../../data/testData';
import { ISlotsInfo } from '../../types';

interface IProps {
  // pickup: Date;
  itemEta: number;
  clickHandler: (slot: number) => void;
  pickupSlot: Date;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      width: '100%',
    },
    selectRoot: {},
  })
);

const SlotModal = (props: IProps) => {
  const classes = useStyles();
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
    const retSlots = [
      <MenuItem value='Choose Pickup Time' disabled key='placeholder'>
        Choose Pickup Time
      </MenuItem>,
    ];

    filteredSlots.forEach((slotInfo) => {
      retSlots.push(
        <MenuItem
          key={slotInfo.slot}
          disabled={!slotInfo.isAvailable}
          onClick={() => {
            if (slotInfo.isAvailable) {
              props.clickHandler(slotInfo.slot);
            }
          }}
          style={{
            textDecoration: slotInfo.isAvailable ? 'none' : 'line-through',
          }}
        >
          {format(new Date(slotInfo.slot), 'PPp')}
        </MenuItem>
      );
    });

    return retSlots;
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        id="slot select"
        placeholder="Chose Pickup Time"
        value={
          props.pickupSlot
            ? format(new Date(props.pickupSlot), 'PPp')
            : 'Choose Pickup Time'
        }
        className={classes.selectRoot}
      >
        {renderSlots()}
      </Select>
    </FormControl>
  );
};

export default SlotModal;
