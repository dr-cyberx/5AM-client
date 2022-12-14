import { toggleDrawerInnerContent } from '@Redux-store/index';
import { DrawerChild } from '@Redux-store/type';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { Iinput, iInputSize } from '@components/core/Input/Input';
import { capitalizeText } from 'utils/textUtils';
import AmazeToast from '@components/core/Toast';

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
  rule?: any;
}> = [
  {
    label: 'Phone Number',
    type: 'number',
    name: 'login_phone_number',
    rule: { maxLength: 11, minLength: 10 },
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
  name: string,
  rule?: typeof Object
): iSignUpInputData => {
  return {
    inputSize: iInputSize.MEDIUM,
    label,
    type,
    name,
    rules: { required: true, ...rule },
  };
};

export const showInvalidInputAlert = (inputVals: string[]): boolean => {
  debugger;
  try {
    const newInputValArr = [];
    for (let index = 0; index < inputVals.length; index++) {
      newInputValArr.push(capitalizeText(inputVals[index]));
    }
    if (newInputValArr.length > 0) {
      AmazeToast({
        message: `${newInputValArr[0]} is required!`,
        type: 'error',
        position: 'bottom-left',
      });
      return false;
    }
    return true;
  } catch (err) {
    AmazeToast({
      message: `Something Went Wrong!`,
      type: 'error',
      position: 'bottom-left',
    });
    return false;
  }
};
