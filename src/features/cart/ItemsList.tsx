//
import React, {Fragment} from "react";
import {
  FindMenuItem,
  GenerateCurrencyNumber,
  CalculateLineItemTotal,
} from "../../utils";
import styled from "styled-components";

interface IProps{
  lineItems:
}

const ItemsList = (props) => {
  let itemsArr = [];
  for (const lineItem of props.lineItems) {
    const cartItem = lineItem.cartItem;
    const item = FindMenuItem(props.stall.menu, cartItem.itemId);
    if (item) {
      itemsArr.push(
        <div
          className="row align-items-start m-0 no-gutters"
          key={lineItem._id}
          data-testid="line_item"
        >
          <div className="col-1 pt-1">
            <CountWrapper data-testid={`${lineItem._id}_${lineItem.count}`}>
              <Count>{lineItem.count}</Count>
            </CountWrapper>
          </div>
          <div className="col-9 overflow-auto">
            <div className="col">
              <ItemName>{item.name}</ItemName>
              {props.page === "cart" && (
                <EditText
                  data-testid={`${lineItem._id}_edit`}
                  onClick={() => {
                    props.history.push(
                      `/stall/${props.cart.stallId}/${cartItem.itemId}/${lineItem._id}`
                    );
                  }}
                >
                  Edit
                </EditText>
              )}
            </div>
          </div>
          <div
            className="col-2 m-0 p-0 text-right"
            data-testid={`${lineItem._id}_total
            `}
          >
            <CurrencyP>
              {GenerateCurrencyNumber(CalculateLineItemTotal(cartItem))}
            </CurrencyP>
          </div>
        </div>
      );
    }
  }
  return <Fragment>{itemsArr}</Fragment>;
};

export default ItemsList;

const Count = styled(CommonP)`
  font-family: NationalRegular;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #00476e;
`;

const CountWrapper = styled(defaultFlex)`
  height: 22px;
  width: 22px;
  background: #ffffff;
  mix-blend-mode: normal;
  border: 1px solid #00476e;
  box-sizing: border-box;
  border-radius: 4px;
`;

const ItemName = styled(CommonP)`
  font-family: NationalRegular;
  font-size: 16px;
  line-height: 24px;
  color: #444444;
`;

const EditText = styled(CommonP)`
  font-family: NationalBold;
  font-size: 14px;
  line-height: 22px;
  color: #00adf6;
  cursor: pointer;
`;

const CurrencyP = styled(CommonP)`
  font-family: PlatformRegular;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 1px;
  color: #444444;
`;
