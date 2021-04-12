import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import { format } from 'date-fns';
import { slotsInfo } from '../../data/testData';

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

  const renderSlots = () => {
    const minTime = Date.now() + props.itemEta * 60 * 1000;
    const filteredSlots = slotsInfo;
    const retSlots = [
      <MenuItem value="Choose Pickup Time" disabled key="placeholder">
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
