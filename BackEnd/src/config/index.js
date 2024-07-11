import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.NODE_PORT;
export const tokenauth = process.env.TOKEN;
export const googleConfig = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectUri: process.env.GOOGLE_REDIRECT_URI,
    scope: process.env.GOOGLE_SCOPE
};
