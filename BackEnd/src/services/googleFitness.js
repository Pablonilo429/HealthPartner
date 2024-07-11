import { google } from 'googleapis';
import { googleConfig } from '../config/index.js';

const oAuth2Client = new google.auth.OAuth2(
  googleConfig.clientId,
  googleConfig.clientSecret,
  googleConfig.redirectUri
);

export const generateAuthUrl = () => oAuth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: googleConfig.scope
});

export const getToken = async (code) => {
  const { tokens } = await oAuth2Client.getToken(code);
  if (tokens.refresh_token) {
    oAuth2Client.setCredentials({ refresh_token: tokens.refresh_token });
    await oAuth2Client.refreshAccessToken();
  }
  return tokens.access_token;
};

export const fetchFitnessData = async (token, dataTypeName, dataSourceId, startTimeMillis, endTimeMillis) => {
  oAuth2Client.setCredentials({ access_token: token });
  const fitnessStore = google.fitness({ version: 'v1', auth: oAuth2Client });
  const data = {
    aggregateBy: [{ dataTypeName, dataSourceId }],
    bucketByTime: { durationMillis: 24 * 60 * 60 * 1000 },
    startTimeMillis,
    endTimeMillis
  };
  return fitnessStore.users.dataset.aggregate({
    userId: 'me',
    requestBody: data,
    fields: 'bucket(dataset(point(value(intVal))))'
  });
};
