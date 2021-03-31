import React, { Fragment } from 'react';
import config from 'react-global-configuration';
import { format } from 'date-fns';
import { IconContext } from 'react-icons';
import { MdModeEdit } from 'react-icons/all';
import styled from 'styled-components';
import { GenerateCurrencyNumber, GenerateEpochDate } from '../../utils';
import { FullfilmentModeType, zeroFee } from './Cart';
import { IPrice } from '../../types';
import { CommonP } from '../../commonStyles';

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
  dateModal: boolean;
  pickupSlot?: Date;
  mode: string;
  pickup?: Date | number;
}

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
  return (
    (enableSurgeFee || config.get('schedule_payment')) && (
      <PickupRow className="row">
        <PickupHeadline data-testid="pickup_heading" className="col-12">
          Pickup
        </PickupHeadline>
        <PickupContainer className="container-fluid">
          {enableSurgeFee && (
            <>
              <AsapRadio
                className="row align-items-center"
                // @ts-ignore
                active={mode === FullfilmentModeType.SKIP_THE_LINE}
                onClick={() => {
                  handleClose(dynamicFee, dynamicEta);
                  updateState({
                    mode: FullfilmentModeType.SKIP_THE_LINE,
                    pickupSlot: undefined,
                  });
                }}
                data-testid="dynamic_radio_wrapper"
              >
                <div className="col-2 p-0 text-left">
                  <RadioInput
                    type="radio"
                    id="dynamic"
                    name="dynamicRadio"
                    data-testid="dynamic_radio"
                    checked={mode === FullfilmentModeType.SKIP_THE_LINE}
                    onChange={() => {}}
                  />
                </div>
                <div className="col-8 p-0 text-left">
                  <RadioText>Pickup in {dynamicEta} mins</RadioText>
                </div>
                <div className="col-2 p-0 text-right">
                  <RadioPrice>{GenerateCurrencyNumber(dynamicFee)}</RadioPrice>
                </div>
              </AsapRadio>
            </>
          )}
          <NormalRadio
            className="row align-items-center"
            // @ts-ignore
            active={mode === FullfilmentModeType.FREE_PICKUP}
            onClick={() => {
              handleClose(zeroFee, itemEta);
              updateState({
                mode: FullfilmentModeType.FREE_PICKUP,
                pickupSlot: undefined,
              });
            }}
          >
            <div className="col-2 text-left p-0">
              <RadioInput
                type="radio"
                id="regular"
                name="normalRadio"
                data-testid="normal_radio"
                checked={mode === FullfilmentModeType.FREE_PICKUP}
                onChange={() => {}}
              />
            </div>
            <div className="col-8 text-left p-0">
              <RadioText>Pickup in {itemEta} mins</RadioText>
            </div>
            <div className="col-2 text-right p-0">
              <RadioPrice>$0.00</RadioPrice>
            </div>
          </NormalRadio>
          {config.get('schedule_payment') && (
            <ScheduleRadio
              className="row align-items-center"
              // @ts-ignore
              active={mode === FullfilmentModeType.SCHEDULED_PICKUP}
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
              <div className="col-2 text-left p-0">
                <RadioInput
                  name="scheduleRadio"
                  type="radio"
                  id="schedule"
                  checked={mode === FullfilmentModeType.SCHEDULED_PICKUP}
                  data-testid="schedule_radio"
                  onChange={() => {}}
                />
              </div>
              <div className="col-8 text-left p-0">
                <div
                  className="col-12 p-0 text-left"
                  // onClick={() => openScheduleModal()}
                >
                  <ScheduleText>Schedule Pickup</ScheduleText>
                  {mode === FullfilmentModeType.SCHEDULED_PICKUP && !dateModal && (
                    <div
                      onClick={() => {
                        updateState({
                          dateModal: true,
                          // @ts-ignore
                          pickup: GenerateEpochDate(new Date(pickupSlot)),
                        });
                      }}
                    >
                      <DateText>
                        {pickupSlot
                          ? format(new Date(pickupSlot), 'PPp')
                          : // @ts-ignore
                          format(new Date(pickup), 'PP')}
                        <EditTimeSpan>
                          <IconContext.Provider
                            value={{
                              color: '#00ADF6',
                              className: 'global-class-name',
                              size: '14px',
                            }}
                          >
                            <MdModeEdit />
                          </IconContext.Provider>
                          {/*{format(new Date(pickup), 'MM/dd/yyyy')}*/}
                        </EditTimeSpan>
                      </DateText>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-2 text-right p-0">
                <RadioPrice>$0.00</RadioPrice>
              </div>
            </ScheduleRadio>
          )}
        </PickupContainer>
      </PickupRow>
    )
  );
};

const PickupContainer = styled.div`
  padding: 0 15px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-top: solid 4px #00adf6;
`;

const AsapRadio = styled.div`
  height: 48px;
  border: 1px solid;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 0 15px;
  margin: 20px 0 0 0;
  border-color: ${(props) =>
    //@ts-ignore
    props.active ? 'rgba(0, 173, 246, 0.05)' : '#E1E1E1'};
  background: ${(props) =>
  //@ts-ignore

    props.active ? 'rgba(0, 173, 246, 0.05)' : '#FFFFFF'};
`;

const NormalRadio = styled(AsapRadio)`
  margin: 10px 0 15px 0;
  background: ${(props) =>
  //@ts-ignore

    props.active ? 'rgba(0, 173, 246, 0.05)' : '#FFFFFF'};
  border-color: ${(props) =>
  //@ts-ignore

    props.active ? 'rgba(0, 173, 246, 0.05)' : '#E1E1E1'};
`;

const ScheduleRadio = styled(NormalRadio)`
  padding: 10px 15px;
  height: auto;
`;

const ScheduleText = styled(CommonP)`
  font-family: NationalRegular;
  font-size: 16px;
  line-height: 24px;
  color: #444444;
  cursor: pointer;
`;

const PickupHeadline = styled.div`
  font-family: NationalBold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #00adf6;
`;

const PickupRow = styled.div`
  margin: 30px 0 0 0;
`;

const RadioInput = styled.input`
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Chrome, Safari, Opera */
  transform: scale(1.5);
`;

const RadioText = styled(CommonP)`
  font-family: NationalMedium;
  font-size: 16px;
  line-height: 24px;
  color: #444444;
`;

const DateText = styled(RadioText)`
  font-size: 14px;
`;

const RadioPrice = styled(CommonP)`
  font-family: PlatformRegular;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 1px;

  color: #444444;
`;
const EditTimeSpan = styled.span`
  margin-left: 5px;
`;
