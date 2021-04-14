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
  GOOGLE_ANALYTICS_CODE: getEnvVar('REACT_APP_GOOGLE_ANALYTICS_CODE'),
  REACT_APP_GOOGLE_API_KEY: getEnvVar('REACT_APP_GOOGLE_KEY'),
  REACT_APP_BACKEND_ENDPOINT: getEnvVar('REACT_APP_BACKEND_ENDPOINT'),
  SAN_FRANCISCO_LAT: 37.7749,
  SAN_FRANCISCO_LONG: -122.4194,
};

export default config;
