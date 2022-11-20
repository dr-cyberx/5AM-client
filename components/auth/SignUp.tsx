import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './auth.module.scss';
import { useForm } from 'react-hook-form';
import Input from '@components/core/Input/Input';
import Button from '@components/core/Button/Button';
import { toggleMuiDrawer } from '@components/core/Drawer/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { InputArgAssigner, signUpInputData } from './authData';
import { toogleAuthComponent } from './Login';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

const SignUp: React.FunctionComponent = (): JSX.Element => {
  const { drawerAuth } = useSelector((state: any) => state.rootState);
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
      <div className={styles['Login'] + ' ' + styles['signUp']}>
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
                  <Input
                    control={control}
                    {...InputArgAssigner(item.label, item.type, item.name)}
                  />
                </>
              )
            )}
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

export default SignUp;
