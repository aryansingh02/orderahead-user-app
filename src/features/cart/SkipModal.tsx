import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import { GenerateCurrencyNumber } from "../../utils";
import { FullfilmentModeType, zeroFee } from "./Cart";
import { IPrice } from '../../types';
import { CommonP, flexColumnDiv, defaultFlex } from '../../commonStyles';

interface IProps {
  showModal: boolean;
  itemEta: number;
  handleClose: (zeroFee: IPrice, itemEta: number) => void;
  updateState: ({ mode }: {mode: string}) => void;
  dynamicEta: number;
  dynamicFee: IPrice;
}

export const SkipModal = (props:IProps) => {
  const {
    showModal,
    itemEta,
    handleClose,
    updateState,
    dynamicEta,
    dynamicFee,
  } = props;
  return (
    <>
      <Modal
        show={showModal}
        // onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="rounded-0"
        onHide={() => {
          handleClose(zeroFee, itemEta);
          updateState({ mode: FullfilmentModeType.FREE_PICKUP });
        }}
      >
        <Modal.Body className="rounded-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center">
                <img
                  src="/img/burger-walking.gif"
                  alt="surge fee"
                  width="200px"
                  className="rounded-circle"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 dynamicFeeBoxHeader text-center">
                <HeaderText>Want to skip the line?</HeaderText>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center dynamicFeeBoxDescription">
              <SecondaryText>
                Skipping the line costs a little extra, but will save you time
                in a pinch.
              </SecondaryText>
            </div>
          </div>
          {dynamicFee && dynamicFee.amount > 0 && (
            <ButtonsWrapper className="row no-gutters align-items-center">
              <NoThanksContainer className="col-6">
                <NoThanksButton
                  onClick={() => {
                    handleClose(zeroFee, itemEta);
                    updateState({ mode: FullfilmentModeType.FREE_PICKUP });
                  }}
                >
                  <NoThanksText>No, Thanks</NoThanksText>
                </NoThanksButton>
                <div className=" etaQuote">
                  <span className="redWaitingDot mr-1" />
                  {itemEta}min
                </div>
              </NoThanksContainer>
              <YesThanksContainer className="col-6">
                <YesThanksButton
                  onClick={() => {
                    handleClose(dynamicFee, dynamicEta);
                    updateState({
                      mode: FullfilmentModeType.SKIP_THE_LINE,
                    });
                  }}
                >
                  <YesThanksText>
                    Yes, skip for{" "}
                    <span>{GenerateCurrencyNumber(dynamicFee)}</span>
                  </YesThanksText>
                </YesThanksButton>
                <div className=" etaQuote">
                  <span className="greenWaitingDot mr-1" />
                  {dynamicEta}min
                </div>
              </YesThanksContainer>
            </ButtonsWrapper>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

const ButtonsWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 15px;
`;

const HeaderText = styled(CommonP)`
  font-family: PlatformBold;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
  color: #000000;
  margin-top: 30px;
`;

const SecondaryText = styled(CommonP)`
  font-family: NationalRegular;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #444444;
  margin-top: 10px;
`;

const NoThanksContainer = styled(flexColumnDiv)`
  width: 100%;
  align-items: center;
`;

const YesThanksContainer = styled(NoThanksContainer)`
  width: 100%;
`;

const NoThanksButton = styled(defaultFlex)`
  height: 48px;
  width: calc(100% - 7px);
  margin-right: 7px;
  margin-bottom: 5px;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
`;

const NoThanksText = styled(CommonP)`
  font-family: PlatformRegular;
  font-size: 16px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  color: #444444;
`;

const YesThanksButton = styled(NoThanksButton)`
  margin-left: 7px;
  background: #00adf6;
`;

const YesThanksText = styled(NoThanksText)`
  color: #ffffff;
`;