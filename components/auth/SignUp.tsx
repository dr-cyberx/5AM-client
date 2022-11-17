import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import styles from './auth.module.scss';

const SignUp: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <div className={styles.signUp}>
        <div className={styles.signUp_header}>
          <span className={styles.close_drawer_icon}>
            <CloseIcon />
          </span>
          <div className={styles.title}>
            <Typography align="left" fontSize={25}>
              Sign Up
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
