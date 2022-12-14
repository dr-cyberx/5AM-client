import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import styles from './auth.module.scss';
import { useForm } from 'react-hook-form';
import Input from '@components/core/Input/Input';
import Button from '@components/core/Button/Button';
import { toggleMuiDrawer } from '@components/core/Drawer/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import {
  InputArgAssigner,
  showInvalidInputAlert,
  signUpInputData,
  toogleAuthComponent,
} from './authData';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { IinitialState } from '@Redux-store/type';
import { authOperations } from './authService';
import AmazeToast from '@components/core/Toast';
import { NextRouter, useRouter } from 'next/router';
import FindLocation from '@components/core/findLocation/FindLocation';
import { getLocation } from '@components/Homepage/indexData';
import useLocalStorage, { iUseLocalStorage } from '@hooks/useLocalstorage';
import {
  toggleMagnifiedLoader,
  toggleIsLocationAvailable,
  toggleGlobalLoader,
} from '@Redux-store/index';
import { IconButton, Tooltip } from '@mui/material';
import { arrowForwardIcon, closeIcon, warningIcon } from '@components/Icons';

const SignUp: React.FunctionComponent = (): JSX.Element => {
  const localStorage: iUseLocalStorage = useLocalStorage;
  const [, setStatus] = useState<string>('');
  const [, setAddress] = useState<string>('');
  const [appendOtpField, setAppendOtpField] = useState<boolean>(false);
  const router: NextRouter = useRouter();
  const { drawerAuth }: IinitialState = useSelector(
    (state: any) => state.rootState
  );
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
  } = useForm();

  const handleDetectLocation = () =>
    getLocation(
      setStatus,
      dispatch,
      toggleMagnifiedLoader,
      setAddress,
      toggleIsLocationAvailable,
      setValue,
      localStorage,
      clearErrors
    );

  const onSubmit = async (data: any): Promise<void> => {
    dispatch(toggleGlobalLoader(true));
    try {
      const signUpResp = await authOperations.signUP({ ...data });
      if (!signUpResp.error) {
        // const sendOTP = await authOperations.verifyOTP({
        //   phoneNumber: data.login_phone_number,
        //   otp: data.signUp_otp,
        // });
        setAppendOtpField(true);
      }
      dispatch(toggleGlobalLoader(false));
      // toggleMuiDrawer(false, dispatch);
      // router.push('/home');
    } catch (err) {
      dispatch(toggleGlobalLoader(false));
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles['Login'] + ' ' + styles['signUp']}>
        <div className={styles.login_header}>
          <span
            className={styles.close_drawer_icon}
            onClick={() => toggleMuiDrawer(false, dispatch)}
          >
            {closeIcon()}
          </span>
        </div>

        <div className={styles.formBody}>
          <div className={styles.title}>
            <Typography align="left" fontSize={25}>
              Sign Up
            </Typography>
          </div>
          <Typography
            align="left"
            variant="body2"
            className={styles.helperText}
          >
            or{' '}
            <span
              className={styles.login_page_link_text}
              onClick={() => toogleAuthComponent(drawerAuth, dispatch)}
            >
              Login to your account
            </span>
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles['form'] + ' ' + styles['signUpForm']}
          >
            {signUpInputData.map(
              (item: typeof signUpInputData[1]): React.ReactNode => (
                <>
                  <div className={styles['signUp_inputs']}>
                    {item.name === 'login_phone_number' ? (
                      <Input
                        control={control}
                        {...InputArgAssigner(
                          item.label,
                          item.type,
                          item.name,
                          item.rule
                        )}
                      />
                    ) : (
                      <Input
                        control={control}
                        {...InputArgAssigner(item.label, item.type, item.name)}
                      />
                    )}
                    {errors[item.name] ? (
                      <Tooltip title={`${item.label} is required!`}>
                        <div className={styles['error_icon']}>
                          {warningIcon()}
                        </div>
                      </Tooltip>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              )
            )}
            <div className={styles['signUp_inputs']}>
              <FindLocation
                control={control}
                handleDetectLocation={handleDetectLocation}
                inputName="location"
              />
              {errors['location'] ? (
                <Tooltip title={`location is required!`}>
                  <div className={styles['error_icon']}>{warningIcon()}</div>
                </Tooltip>
              ) : (
                <></>
              )}
            </div>
            {appendOtpField ? (
              <div className={styles['signUp_inputs']}>
                <Input
                  control={control}
                  {...InputArgAssigner('Enter OTP', 'number', 'signUp_otp', {
                    minLength: 4,
                    maxLength: 5,
                  })}
                />
                {errors['signUp_otp'] ? (
                  <Tooltip title={`OTP is required!`}>
                    <div className={styles['error_icon']}>{warningIcon()}</div>
                  </Tooltip>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}

            <Button
              btnSize="large"
              type="submit"
              label={appendOtpField ? 'SIGN UP' : 'SEND OTP'}
              style={{ width: '100%' }}
              endIcon={arrowForwardIcon()}
            />
          </form>
          <Typography
            align="left"
            variant="body2"
            className={styles.helperText1}
          >
            By clicking on Login, I accept the{' '}
            <span className={styles.terms_and_condition_link_text1}>
              terms & conditions Policy
            </span>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default SignUp;
