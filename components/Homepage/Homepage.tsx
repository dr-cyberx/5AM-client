import Layout from '@components/core/Layout/Layout';
import useLocalStorage from '@hooks/useLocalstorage';
import { setGeoLocation, toggleIsLocationAvailable } from '@Redux-store/index';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss';

const Homepage: React.FunctionComponent = (): JSX.Element => {
  const { isLocationAvailable } = useSelector((state: any) => state.rootState);
  const dispatch = useDispatch();
  const localStorage = useLocalStorage;

  useEffect(() => {
    dispatch(toggleIsLocationAvailable(true));
    const location = localStorage.getItem('current_Address');
    dispatch(setGeoLocation(location.display_name || ''));
  }, []);

  return (
    <>
      <Layout>
        <div className={styles.Homepage}>Homepage</div>;
      </Layout>
    </>
  );
};

export default Homepage;
