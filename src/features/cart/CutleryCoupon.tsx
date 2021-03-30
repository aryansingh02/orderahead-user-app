import React, {Fragment} from "react";
import Switch from "react-switch";
import {IconContext} from "react-icons";
import {IoIosCheckmarkCircle, IoIosCloseCircle} from "react-icons/all";
import styled from "styled-components";
import {CommonP} from "../../styles/CommonStyles";
import get from "lodash/get";

export const CutleryCoupon = (props) => {
  const {
    cutlerySwitch,
    updateState,
    updateNote,
    setCouponCode,
    invoice,
    cart,
  } = props;
  const getCouponClass = () => {
    if (cart.couponCode) {
      return get(invoice, "discount.amount") === 0
        ? "invalidCoupon"
        : "validCoupon";
    }
    return "";
  };
  return (
    <Fragment>
      <CutleryRow className="row p-0">
        <div className="col-3 m-0 p-0 text-left">
          <img src="/img/leaf.png" alt="surge fee" width="16px" height="16px" />
        </div>
        <div className="col-6 m-0 p-0">
          <CutleryTextHeading>Utensils, straws, etc..</CutleryTextHeading>
          <CutleryTextContent>
            These items won't be added unless you ask
          </CutleryTextContent>
        </div>
        <div className="col-3 text-right m-0 p-0">
          <Switch
            onChange={(checked) => {
              updateState({cutlerySwitch: checked});
              let note;
              if (checked) {
                note = "Utensils, straws, etc to be added in this order.";
              } else {
                note = "";
              }
              updateNote(note);
            }}
            checked={cutlerySwitch}
            className="react-switch"
            uncheckedIcon={false}
            checkedIcon={false}
            width={40}
            height={20}
            onColor="#00ADF6"
          />
        </div>
      </CutleryRow>
      <CouponRow>
        <Input
          placeholder="Enter your coupon or promo code"
          className={getCouponClass()}
          value={cart.couponCode}
          onChange={(evt) => {
            setCouponCode(evt.target.value);
          }}
        />
        <CheckDiv className="pointer">
          {getCouponClass() === "validCoupon" && (
            <IconContext.Provider
              value={{
                color: "rgba(28,189,142,1)",
                className: "global-class-name",
                size: "16px",
              }}
            >
              <IoIosCheckmarkCircle />
            </IconContext.Provider>
          )}
          {getCouponClass() === "invalidCoupon" && (
            <IconContext.Provider
              value={{
                color: "rgba(255, 81, 81, 1)",
                className: "global-class-name",
                size: "16px",
              }}
            >
              <IoIosCloseCircle />
            </IconContext.Provider>
          )}
        </CheckDiv>
      </CouponRow>
    </Fragment>
  );
};

const CutleryRow = styled.div`
  margin-top: 20px;
  margin-left: 0;
  margin-right: 0;
  padding: 10px 0;
`;

const CouponRow = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  position: relative;
`;

const CutleryTextHeading = styled(CommonP)`
  font-family: NationalBold;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const CutleryTextContent = styled(CommonP)`
  font-family: NationalRegular;
  font-size: 14px;
  line-height: 20px;
  color: #444444;
`;

const Input = styled.input`
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  border-radius: 4px;
  height: 38px;
  width: 100%;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  padding-left: 10px;
  color: #979797;
  &:focus {
    outline: none;
  }
`;

const CheckDiv = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
`;