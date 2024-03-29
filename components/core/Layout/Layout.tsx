import React, { memo } from 'react';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { DrawerChild } from '@Redux-store/type';
import Login from '@components/auth/Login';
import SignUp from '@components/auth/SignUp';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.scss';
import { colors } from '../variable';
import TemporaryDrawer from '../Drawer/Drawer';
import { MagnifyLoader, GlobalLoader } from '../loaders';

interface iLayout {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<iLayout> = ({
  children,
}): JSX.Element => {
  const {
    magnifiedLoader,
    globalLoader,
    drawerAuth,
    isLocationAvailable: isNav,
  } = useSelector((state: any) => state.rootState);

  const showAuthScreen = (): React.ReactNode => {
    switch (drawerAuth) {
      case DrawerChild.LOGIN:
        return <Login />;

      case DrawerChild.SIGNUP:
        return <SignUp />;

      default:
        return <></>;
    }
  };

  return (
    <>
      <div className={styles.layout}>
        {isNav ? <Navbar /> : <></>} {children}
        <TemporaryDrawer>{showAuthScreen()}</TemporaryDrawer>
        <ToastContainer />
        <MagnifyLoader
          visible={magnifiedLoader}
          color={colors.primary}
          glassColor="#ffffff6a"
        />
        <GlobalLoader visible={globalLoader} color={colors.primary} />
      </div>
    </>
  );
};

export default memo(Layout);
