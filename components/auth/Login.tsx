import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from './auth.module.scss';

const Login: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <div className={styles.Login}>
        <span className={styles.close_drawer_icon}>
          <CloseIcon />
        </span>
      </div>
    </>
  );
};

export default Login;
