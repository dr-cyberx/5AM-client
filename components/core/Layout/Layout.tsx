import React, { memo, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss';
import MagnifyLoader from '../loaders/MagnifyLoader';
import { colors } from '../variable';
import TemporaryDrawer from '../Drawer/Drawer';

interface iLayout {
  children: React.ReactNode;
  isNav: boolean;
}

const Layout: React.FunctionComponent<iLayout> = ({
  children,
  isNav,
}): JSX.Element => {
  const { magnifiedLoader } = useSelector((state: any) => state.rootState);

  return (
    <>
      <div className={styles.layout}>
        {isNav ? <Navbar /> : <></>} {children}
        <TemporaryDrawer>
          <h1>Hello world</h1>
        </TemporaryDrawer>
        <ToastContainer />
        <MagnifyLoader
          visible={magnifiedLoader}
          color={colors.primary}
          glassColor="#ffffff6a"
        />
      </div>
    </>
  );
};

export default memo(Layout);
