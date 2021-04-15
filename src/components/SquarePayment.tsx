import React, { Component } from 'react';
import get from 'lodash/get';
import config from 'react-global-configuration';
import { isSafari } from 'react-device-detect';
import { loadScript } from '../utils';
import { IInvoice, IStall } from '../types';

interface IProps {
  invoice: IInvoice;
  showLoading: boolean;
  stall: IStall;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleCreateOrder: (arg0: any) => void;
}

interface IState {
  paymentObject: object | null;
  seeMore: boolean;
  applePaySupported: boolean;
  showPaymentOptions: boolean;
}

class SquarePayment extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      paymentObject: null,
      seeMore: false,
      applePaySupported: false,
      showPaymentOptions: false,
    };
  }

  componentDidMount() {
    const that = this;
    loadScript(config.get('square_payment_form_js'), () => {
      // @ts-ignore
      const payObj = new window.SqPaymentForm({
        // Initialize the payment form elements
        applicationId: config.get('square_app_id'),
        // from AWS dynamo DB square_venue_info table.
        locationId: this.props.stall.pointOfSaleInfo.squareInfo.locationId,
        inputClass: 'sq-input',
        autoBuild: false,
        // Customize the CSS for SqPaymentForm iframe elements
        inputStyles: [
          {
            fontSize: '16px',
            lineHeight: '24px',
            padding: '16px',
            placeholderColor: '#a0a0a0',
            backgroundColor: 'transparent',
          },
        ],
        // Initialize the credit card placeholders
        cardNumber: {
          elementId: 'sq-card-number',
          placeholder: 'Card Number',
        },
        cvv: {
          elementId: 'sq-cvv',
          placeholder: 'CVV',
        },
        expirationDate: {
          elementId: 'sq-expiration-date',
          placeholder: 'MM/YY',
        },
        postalCode: {
          elementId: 'sq-postal-code',
          placeholder: 'Postal',
        },
        // Initialize Web Apple Pay placeholder ID
        applePay: {
          elementId: 'sq-apple-pay',
        },
        googlePay: {
          elementId: 'sq-google-pay',
        },
        callbacks: {
          unsupportedBrowserDetected() {
            alert('unsupported browsers');
          },

          methodsSupported(methods: { applePay: boolean; googlePay: boolean }) {
            let applePayPromo = false;
            const applePayLabel = document.getElementById('sq-apple-pay-label');
            const applePayBtn = document.getElementById('sq-apple-pay');
            if (applePayLabel && applePayBtn && methods.applePay === true) {
              applePayPromo = true;
              applePayBtn.style.display = 'inline-block';
              applePayLabel.style.display = 'none';
            }
            const googlePayBtn = document.getElementById('sq-google-pay');
            if (googlePayBtn && methods.googlePay === true) {
              googlePayBtn.style.display = 'inline-block';
            }
            that.setState({
              seeMore: !applePayPromo,
              applePaySupported: applePayPromo,
            });
          },
          createPaymentRequest: () => {
            const cost = (
              get(this.props.invoice, 'total.amount', 0) / 100
            ).toFixed(2);
            return {
              requestShippingAddress: false,
              requestBillingInfo: true,
              currencyCode: 'USD',
              countryCode: 'US',
              total: {
                label: 'Order with Sleek',
                amount: cost,
                pending: false,
              },
              lineItems: [
                {
                  label: 'Subtotal',
                  amount: cost,
                  pending: false,
                },
              ],
            };
          },
          cardNonceResponseReceived: (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            errors: any[],
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            nonce: any,
            paymentData: { digital_wallet_type: string },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            contacts: any
          ) => {
            if (errors) {
              //   Log errors from nonce generation to the browser developer console.
              errors.forEach((error) => {
                console.error(`  ${error.message}`);
              });
              console.log('Encountered errors, check console for more details');
            } else {
              this.props.handleCreateOrder({
                source: nonce,
                paymentMethod:
                  paymentData.digital_wallet_type &&
                  paymentData.digital_wallet_type !== 'NONE'
                    ? paymentData.digital_wallet_type
                    : 'CARD',
              });
            }
          },
        },
      });
      this.setPaymentObject(payObj);
      payObj.build();
    });

    setTimeout(() => {
      that.setState({ showPaymentOptions: true });
    }, 2000);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setPaymentObject = (val: any) => {
    this.setState({
      paymentObject: val,
    });
  };

  triggerPayment = () => {
    try {
      if (this.state.paymentObject) {
        // @ts-ignore
        this.state.paymentObject.requestCardNonce();
      }
    } catch (err) {
      console.log('err', err);
    }
  };


  render() {
    // Do not show horizontal separator when only one payment is available.
    const singlePaymentMethods =
      !this.state.applePaySupported &&
      isSafari; /* Gpay is not added for Safari */
    return this.state.paymentObject ? (
      <div style={{ height: '420px' }}>
        <div
          id="form-container"
          style={{ display: this.state.showPaymentOptions ? 'block' : 'none' }}
        >
          <div id="sq-walletbox">
            <div id="sq-apple-pay-label" className="wallet-not-enabled" />
            {/* Placeholder for Apple Pay on the Web button */}
            <button
              id="sq-apple-pay"
              className="button-apple-pay"
              disabled={this.props.showLoading}
              aria-label="apple pay"
              type="button"
            />

            <button
              id="sq-google-pay"
              className="button-google-pay"
              disabled={this.props.showLoading}
              aria-label="google pay"
              style={{
                display: this.state.seeMore && !isSafari ? 'block' : 'none',
              }}
              type="button"
              // Show GPay for all devices except Safari.
            />

            {singlePaymentMethods ? (
              ''
            ) : (
              <div
                id="sq-walletbox-divider"
                tabIndex={0}
                role="button"
                onKeyDown={() => {
                  this.setState({ seeMore: true });
                }}
                onClick={() => {
                  this.setState({ seeMore: true });
                }}
              >
                {this.state.seeMore ? (
                  <span id="sq-walletbox-divider-label">Or</span>
                ) : (
                  <span
                    id="sq-walletbox-divider-label"
                    style={{ color: '#00ACED' }}
                  >
                    See More Options{' '}
                  </span>
                )}
                <hr />
              </div>
            )}
          </div>

          <div
            style={{ display: this.state.seeMore ? 'block' : 'none' }}
            id="sq-ccbox"
          >
            <div id="sq-card-number" />
            <div className="third" id="sq-expiration-date" />
            <div className="third" id="sq-cvv" />
            <div className="third" id="sq-postal-code" />
          </div>
        </div>
        {this.state.showPaymentOptions ? (
          ''
        ) : (
          <img src="/img/ajax-loader.gif" alt="loading gif" />
        )}
      </div>
    ) : (
      ''
    );
  }
}

export default SquarePayment;
