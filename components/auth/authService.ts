import { APIServices } from '@hooks/useApiServices';

export const authEndPoints = {
  Signup: (data: iSignupData) => {
    return {
      url: 'auth/signup',
      data: data.reqBody,
      headers: data.headers,
    };
  },
  sendOTP: (data: iSendOTP) => {
    return {
      url: '',
      data: data.reqBody,
      headers: data.headers,
    };
  },
  verifyOTP: (data: iVerifyOTP) => {
    return {
      url: '',
      data: data.reqBody,
      headers: data.headers,
    };
  },
};

export const authOperations = {
  // sendOTP: async (request: any) => {},
  // verifyOTP: () => {},
  signUP: async (req: any) => {
    try {
      const request = {
        headers: {},
        reqBody: {
          name: req.login_name || '',
          countryCode: '+91',
          phoneNumber: req.login_phone_number || '',
          email: req.login_email_address || '',
          address: req.location || '',
        },
      };
      const signUpRes = await APIServices.post(authEndPoints.Signup(request));
      return signUpRes?.data?.data || {};
    } catch (err: any) {
      throw new Error(err);
    }
  },
};

export type iSignupReqBody = {
  name: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  address?: string;
};

export type iSignupData = {
  reqBody: iSignupReqBody;
  headers: { [key: string]: string };
};

type iSendOTP = iSignupData & { reqBody: { phoneNumber: string } };
type iVerifyOTP = iSignupData & {
  reqBody: { phoneNumber: string; otp: string };
};
