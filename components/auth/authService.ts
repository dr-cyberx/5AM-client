import { APIServices } from '@hooks/useApiServices';

export const authEndPoints = {
  Signup: (data: iSignupData) => {
    return {
      url: 'auth/signup',
      data: data.reqBody,
      headers: data.headers,
    };
  },
  sendOTP: (data: any) => {
    return {
      url: 'auth/sendOtp',
      data: data.reqBody,
      headers: data.headers,
    };
  },
  verifyOTP: (data: any) => {
    return {
      url: 'auth/verifyOtp',
      data: data.reqBody,
      headers: data.headers,
    };
  },
};

export const authOperations = {
  sendOTP: async (req: { phoneNumber: string }) => {
    try {
      const request = {
        headers: {},
        reqBody: {
          phoneNumber: req.phoneNumber,
        },
      };
      const signUpRes = await APIServices.post(authEndPoints.sendOTP(request));
      console.log('signUpRes >>> ', signUpRes);
      return signUpRes?.data?.data || {};
    } catch (err: any) {
      throw new Error(err);
    }
  },
  verifyOTP: async (req: any) => {
    try {
      const request = {
        headers: {},
        reqBody: {
          phoneNumber: req.phoneNumber,
          otp: req.signUp_otp,
        },
      };
      const verifyOTP = await APIServices.post(
        authEndPoints.verifyOTP(request)
      );
      console.log('verifyOTP >>>', verifyOTP.data);
    } catch (err) {}
  },
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
