import { toggleDrawerInnerContent } from '@Redux-store/index';
import { DrawerChild } from '@Redux-store/type';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { Iinput, iInputSize } from '@components/core/Input/Input';

export const toogleAuthComponent = (
  drawer: DrawerChild,
  dispatcher: Dispatch<AnyAction>
) => {
  if (drawer === DrawerChild.LOGIN) {
    return dispatcher(toggleDrawerInnerContent(DrawerChild.SIGNUP));
  } else if (drawer === DrawerChild.SIGNUP) {
    return dispatcher(toggleDrawerInnerContent(DrawerChild.LOGIN));
  }
};

export type commonKeyValType = iSignUpInputData;

export const signUpInputData: Array<{
  label: string;
  type: Iinput['type'];
  name: string;
}> = [
  {
    label: 'Phone Number',
    type: 'number',
    name: 'login_phone_number',
  },
  {
    label: 'Email',
    type: 'email',
    name: 'login_email_address',
  },
  {
    label: 'Name',
    type: 'text',
    name: 'login_name',
  },
];

export type iSignUpInputData = {
  inputSize: iInputSize;
  label: string;
  type: Iinput['type'];
  name: string;
  rules: { required: boolean };
};

export const InputArgAssigner = (
  label: string,
  type: Iinput['type'],
  name: string
): iSignUpInputData => {
  return {
    inputSize: iInputSize.MEDIUM,
    label,
    type,
    name,
    rules: { required: true },
  };
};
