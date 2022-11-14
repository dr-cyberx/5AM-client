import React, { useEffect, useState } from 'react';
import useLocalStorage, { iUseLocalStorage } from '@hooks/useLocalstorage';
import Layout from '@core/Layout/Layout';
import Homepage from './Homepage';
import SetLocationPage from './setLocationPage';
import { setGeoLocation } from '@Redux-store/index';
import { useDispatch } from 'react-redux';

const HomepageMain: React.FunctionComponent = (): JSX.Element => {
  const [isLocationAvailable, setIsLocationAvailable] =
    useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorage: iUseLocalStorage = useLocalStorage;
    const detectedCity = localStorage.getItem('current_Address') || {};
    const detectedMinifiedCity =
      localStorage.getItem('current_minified_Address') || {};
    if (Object.keys(detectedCity).length === 0) {
      setIsLocationAvailable(false);
    } else {
      setIsLocationAvailable(true);
    }
    if (detectedMinifiedCity.length !== 0) {
      dispatch(setGeoLocation(detectedMinifiedCity));
    }
  }, [isLocationAvailable]);

  const toggleIsLocationAvailable = (isAvailable: boolean): void =>
    setIsLocationAvailable(isAvailable);

  return (
    <Layout isNav={isLocationAvailable}>
      {isLocationAvailable ? (
        <Homepage />
      ) : (
        <SetLocationPage
          toggleIsLocationAvailable={toggleIsLocationAvailable}
        />
      )}
    </Layout>
  );
};

export default HomepageMain;
