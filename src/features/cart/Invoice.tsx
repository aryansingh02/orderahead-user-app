import React from "react";
import {GenerateCurrencyNumber} from "../../util";
import config from "react-global-configuration";
import get from "lodash/get";
import styled from "styled-components";
import {CommonP, defaultFlex, flexColumnDiv} from "../../styles/CommonStyles";

export const Invoice = (props) => {
  const {invoice, cart, setRequestedTipPercent} = props;
  return invoice ? (
    <CostContainer className="row">
      <div className="col-12 p-0 text-left">
        <div className="container-fluid p-0 ">
          <div className="row m-0">
            <PriceLabel className="col-9">Subtotal</PriceLabel>
            <PriceValue className="col-3 text-right">
              {GenerateCurrencyNumber(invoice.subTotal)}
            </PriceValue>
          </div>
          {invoice.surgeFee && invoice.surgeFee.amount > 0 ? (
            <div className="row m-0">
              <PriceLabel className="col-9">Surge Fee</PriceLabel>
              <PriceValue className="col-3 text-right">
                {GenerateCurrencyNumber(invoice.surgeFee)}
              </PriceValue>
            </div>
          ) : (
            ""
          )}
          {invoice.serviceFee && invoice.serviceFee.amount > 0 ? (
            <div className="row m-0">
              <PriceLabel className="col-9">Service Fee</PriceLabel>
              <PriceValue className="col-3 text-right">
                {GenerateCurrencyNumber(invoice.serviceFee)}
              </PriceValue>
            </div>
          ) : (
            ""
          )}
          {invoice.tax && invoice.tax.amount > 0 ? (
            <div className="row m-0">
              <PriceLabel className="col-9">Tax</PriceLabel>
              <PriceValue className="col-3 text-right">
                {GenerateCurrencyNumber(invoice.tax)}
              </PriceValue>
            </div>
          ) : (
            ""
          )}
          {config.get("enable_tipping") ? (
            <div className="row m-0">
              <PriceLabel className="col">Tip</PriceLabel>
              <div className="col-7 text-right p-0 text-right">
                <button
                  type="button"
                  className={"tipButton ".concat(
                    cart.requestedTipPercent === 0 ? "tipButtonSelected" : ""
                  )}
                  onClick={() => setRequestedTipPercent(0)}
                >
                  0%
                </button>
                <button
                  type="button"
                  className={"tipButton ".concat(
                    cart.requestedTipPercent === 10 ? "tipButtonSelected" : ""
                  )}
                  onClick={() => setRequestedTipPercent(10)}
                >
                  10%
                </button>
                <button
                  type="button"
                  className={"tipButton ".concat(
                    cart.requestedTipPercent === 15 ? "tipButtonSelected" : ""
                  )}
                  onClick={() => setRequestedTipPercent(15)}
                >
                  15%
                </button>
                <button
                  type="button"
                  className={"tipButton ".concat(
                    cart.requestedTipPercent === 20 ? "tipButtonSelected" : ""
                  )}
                  onClick={() => setRequestedTipPercent(20)}
                >
                  20%
                </button>
              </div>
              <PriceValue className="col text-right">
                {GenerateCurrencyNumber(invoice.tip)}
              </PriceValue>
            </div>
          ) : (
            ""
          )}
          {get(invoice, "discount.amount") !== 0 ? (
            <div className="row m-0">
              <DiscountLabel className="col">Discount</DiscountLabel>
              <DiscountValue className="col text-right">
                {GenerateCurrencyNumber(invoice.discount)}
              </DiscountValue>
            </div>
          ) : (
            ""
          )}
          <div className="row m-0 font-weight-bold">
            <TotalLabel className="col-9">Total</TotalLabel>
            <TotalValue className="col-3 text-right justify-content-end">
              {GenerateCurrencyNumber(invoice.total)}
            </TotalValue>
          </div>
        </div>
      </div>
    </CostContainer>
  ) : (
    ""
  );
};

const CostContainer = styled.div`
  margin-top: 42px;
`;

const PriceLabel = styled.div`
  font-family: NationalRegular;
  font-size: 14px;
  line-height: 22px;
  color: #444444;
`;
const DiscountLabel = styled.div`
  font-family: NationalRegular;
  font-size: 14px;
  line-height: 22px;
  color: rgba(28, 189, 142, 1);
`;

const PriceValue = styled.div`
  font-family: PlatformRegular;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 1px;
  color: #444444;
`;

const DiscountValue = styled(PriceValue)`
  color: rgba(28, 189, 142, 1);
`;

const TotalLabel = styled.div`
  font-family: NationalMedium;
  font-size: 18px;
  line-height: 26px;
  color: #444444;
`;

const TotalValue = styled.div`
  font-family: PlatformBold;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 1px;
  color: #000000;
`;