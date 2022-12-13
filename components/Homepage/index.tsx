import React, { useEffect, useState } from 'react';
import useLocalStorage, { iUseLocalStorage } from '@hooks/useLocalstorage';
import Layout from '@core/Layout/Layout';
import SetLocationPage from './setLocationPage';
import { setGeoLocation, toggleIsLocationAvailable } from '@Redux-store/index';
import { useDispatch, useSelector } from 'react-redux';
import { NextRouter, useRouter } from 'next/router';

const HomepageMain: React.FunctionComponent = (): JSX.Element => {
  const { isLocationAvailable } = useSelector((state: any) => state.rootState);
  const dispatch = useDispatch();
  const router: NextRouter = useRouter();

  useEffect(() => {
    const localStorage: iUseLocalStorage = useLocalStorage;
    const detectedCity = localStorage.getItem('current_Address') || {};
    const detectedMinifiedCity =
      localStorage.getItem('current_minified_Address') || {};
    if (Object.keys(detectedCity).length === 0) {
      dispatch(toggleIsLocationAvailable(false));
    } else {
      dispatch(toggleIsLocationAvailable(true));
    }
    if (detectedMinifiedCity.length !== 0) {
      dispatch(setGeoLocation(detectedMinifiedCity));
    }
    if (isLocationAvailable) {
      toggleLocationAvailable(true);
      router.push('/home');
    }
  }, [isLocationAvailable]);

  const toggleLocationAvailable = (isAvailable: boolean): void => {
    dispatch(toggleIsLocationAvailable(isAvailable));
  };

  return (
    <>
      <Layout>
        {!isLocationAvailable && (
          <SetLocationPage
            toggleIsLocationAvailable={toggleLocationAvailable}
          />
        )}
      </Layout>
    </>
  );
};

export default HomepageMain;
