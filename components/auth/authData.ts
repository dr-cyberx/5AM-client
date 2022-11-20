import { Iinput, iInputSize } from '@components/core/Input/Input';

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
