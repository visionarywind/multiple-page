let urlPrefix = '127.0.0.1';
if (process.env.NODE_ENV === 'development') {
  urlPrefix = process.env.IS_MOCK_SERVER ? process.env.MOCK_SERVER_URL : urlPrefix;
}
console.log('mock config', urlPrefix);

export const URL_PREFIX = urlPrefix;
