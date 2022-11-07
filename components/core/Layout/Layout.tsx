import React, { memo } from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss';

interface iLayout {
  children: React.ReactNode;
  isNav: boolean;
}

const Layout: React.FunctionComponent<iLayout> = ({
  children,
  isNav,
}): JSX.Element => {
  return (
    <>
      <div className={styles.layout}>
        {isNav ? <Navbar /> : <></>} {children}
      </div>
    </>
  );
};

export default memo(Layout);
