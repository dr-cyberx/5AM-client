import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './auth.module.scss';
import { useForm } from 'react-hook-form';
import Input, { iInputSize } from '@components/core/Input/Input';
import Button from '@components/core/Button/Button';
import { toggleMuiDrawer } from '@components/core/Drawer/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { IinitialState } from '@Redux-store/type';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { toogleAuthComponent } from './authData';

const Login: React.FunctionComponent = (): JSX.Element => {
  const { drawerAuth }: IinitialState = useSelector(
    (state: any) => state.rootState
  );
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className={styles.Login}>
        <div className={styles.login_header}>
          <span
            className={styles.close_drawer_icon}
            onClick={() => toggleMuiDrawer(false, dispatch)}
          >
            <CloseIcon fontSize="medium" />
          </span>
        </div>

        <div className={styles.formBody}>
          <div className={styles.title}>
            <Typography align="left" fontSize={25}>
              Login
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
              create a new account
            </span>
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
              inputSize={iInputSize.MEDIUM}
              label="Enter Phone Number"
              type="number"
              control={control}
              name="login_phone_number"
              rules={{ required: true }}
            />
            <Button
              btnSize="large"
              type="submit"
              label="Login"
              style={{ width: '100%' }}
              endIcon={<ArrowForwardIcon />}
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

export default Login;
