import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import styles from './auth.module.scss';

const SignUp: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <div className={styles.signUp}>
        <span className={styles.close_drawer_icon}>
          <CloseIcon />
        </span>
        <div className={styles.title}>
          <Typography align="left">Sign Up</Typography>
        </div>
      </div>
    </>
  );
};

export default SignUp;
