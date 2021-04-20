const getEnvVar = (varName: string): string | undefined => {
  if (process.env[varName]) {
    return process.env[varName];
  }
  // Set in %PUBLIC_FOLDER%/dev.properties.
  // @ts-ignore
  return window[varName];
};

const config = {
  SENTRY_URL: getEnvVar('REACT_APP_SENTRY_URL'),
  surge_fee_enabled_stall_whitelist: [],

  // Sandbox: https://js.squareupsandbox.com/v2/paymentform
  // Prod: https://js.squareup.com/v2/paymentform
  square_payment_form_js: getEnvVar('REACT_APP_SQUARE_PAYMENT_FORM_JS'),
  square_app_id: getEnvVar('REACT_APP_SQUARE_APP_ID'),

  // Sandbox: https://checkout.sandbox.dev.clover.com/sdk.js
  // Production: https://checkout.clover.com/sdk.js
  clover_payment_form_js: getEnvVar('REACT_APP_CLOVER_PAYMENT_FORM_JS'),

  GOOGLE_ANALYTICS_CODE: getEnvVar('REACT_APP_GOOGLE_ANALYTICS_CODE'),
  REACT_APP_GOOGLE_API_KEY: getEnvVar('REACT_APP_GOOGLE_KEY'),
  REACT_APP_BACKEND_ENDPOINT: getEnvVar('REACT_APP_BACKEND_ENDPOINT'),
  enable_surge_fee: getEnvVar('REACT_APP_ENABLE_SURGE_FEE') === 'true',
  schedule_payment: true,
  SAN_FRANCISCO_LAT: 37.7749,
  SAN_FRANCISCO_LONG: -122.4194,
};

export default config;
