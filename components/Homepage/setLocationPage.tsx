import React, { memo, useState, useRef } from 'react';
import Image from 'next/image';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useDispatch } from 'react-redux';
import {
  toggleMagnifiedLoader,
  setGeoLocation,
  toggleDrawerInnerContent,
} from '@Redux-store/index';
import Button from '@core/Button/Button';
import Typewritter from '@core/Typewritter/Typewritter';
import Input, { iInputSize } from '@core/Input/Input';
import axios, { AxiosResponse } from 'axios';
import useLocalStorage, { iUseLocalStorage } from '@hooks/useLocalstorage';
import AmazeToast from '@core/Toast';
import styles from './index.module.scss';
import { Anchor, toggleMuiDrawer } from '@components/core/Drawer/Drawer';
import { DrawerChild } from '@Redux-store/type';
import { useForm } from 'react-hook-form';
import { getLocation } from './indexData';

interface IauthBtns {
  label: string;
  variant: 'text' | 'contained' | 'outlined';
  side: Anchor;
  style: { backgroundColor?: string };
}

const authBtns: IauthBtns[] = [
  {
    label: 'LOGIN',
    variant: 'text',
    side: 'right',
    style: {},
  },
  {
    label: 'SIGN UP',
    variant: 'contained',
    side: 'right',
    style: { backgroundColor: 'black' },
  },
];

interface iSetLocationPage {
  toggleIsLocationAvailable: (arg: boolean) => void;
}

const SetLocationPage: React.FunctionComponent<iSetLocationPage> = ({
  toggleIsLocationAvailable,
}): JSX.Element => {
  const dispatch = useDispatch();
  const localStorage: iUseLocalStorage = useLocalStorage;
  const [, setStatus] = useState<string>('');
  const [, setAddress] = useState<string>('');
  const { control, setValue } = useForm();

  const handleDetectLocation = () =>
    getLocation(
      setStatus,
      dispatch,
      toggleMagnifiedLoader,
      setAddress,
      toggleIsLocationAvailable,
      setValue,
      localStorage
    );

  const authButtonsAction = (item: IauthBtns): void => {
    toggleMuiDrawer(true, dispatch);
    if (item.label === 'LOGIN') {
      dispatch(toggleDrawerInnerContent(DrawerChild.LOGIN));
    } else if (item.label === 'SIGN UP') {
      dispatch(toggleDrawerInnerContent(DrawerChild.SIGNUP));
    }
  };

  return (
    <div className={styles.setLocationPage}>
      <div className={styles.container1}>
        <div className={styles.child1}>
          <div className={styles.logo_container}>
            <Image
              src={'/5AM-logo.png.png'}
              alt="logo"
              width={100}
              height={100}
            />
            <div className={styles.authContainer}>
              {authBtns.map((item: IauthBtns) => {
                return (
                  <Button
                    key={item.label}
                    label={item.label}
                    btnSize={'medium'}
                    style={item.style}
                    variant={item.variant}
                    onClick={() => authButtonsAction(item)}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.Typewriter_container}>
            <Typewritter
              optionArray={[
                'Hungry ?',
                'Night Shift ?',
                'Dinner Time ?',
                'Party ?',
              ]}
              autoStart
              loop
            />
            <h4 className={styles.Tw_bottom_text}>
              Order food from favourite restaurants near you.
            </h4>
          </div>
          <div className={styles.detectLocation_container}>
            <div className={styles.detect_location}>
              <div className={styles.detect_location_input}>
                <Input
                  name="location"
                  rules={{ required: true }}
                  control={control}
                  inputSize={iInputSize.MEDIUM}
                  style={{ fontSize: '1.5rem' }}
                />
              </div>
              <div className={styles.detect_location_btn}>
                <Button
                  label={'Detect Me'}
                  btnSize={'medium'}
                  onClick={handleDetectLocation}
                  variant={'text'}
                  startIcon={<MyLocationIcon />}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom_container}>
            <div className={styles.title}>
              <p style={{ marginBottom: '0px' }}>POPULAR CITIES IN INDIA</p>
            </div>
            <div className={styles.citiesList}>
              {[
                'New Delhi, ',
                'Mumbai, ',
                'Banglore, ',
                'Hydrabad, ',
                'Lucknow, ',
                'Patna, ',
                'Chandigarh, ',
                '& many more...',
              ].map((item: string, index: number) => (
                <span
                  className={styles.city}
                  key={item}
                  style={index % 2 !== 0 ? { opacity: '0.8' } : {}}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container2}></div>
    </div>
  );
};

export default memo(SetLocationPage);
