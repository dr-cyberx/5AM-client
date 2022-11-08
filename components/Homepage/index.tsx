import React, { useEffect, useState } from 'react';
import useLocalStorage, { iUseLocalStorage } from '../../hooks/useLocalstorage';
import Layout from '../core/Layout/Layout';
import Homepage from './Homepage';
import SetLocationPage from './setLocationPage';

const HomepageMain: React.FunctionComponent = (): JSX.Element => {
  const [showNav, setShowNav] = useState<boolean>(false);

  useEffect(() => {
    const localStorage: iUseLocalStorage = useLocalStorage;
    const detectedCity: any = localStorage.getItem('isCityDetected') || {};
    if (Object.keys(detectedCity).length === 0) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, []);

  return (
    <Layout isNav={showNav}>
      {showNav ? <Homepage /> : <SetLocationPage />}
    </Layout>
  );
};

export default HomepageMain;
