import React, { memo, useState } from 'react';
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
import Input from '@core/Input/Input';
import axios, { AxiosResponse } from 'axios';
import useLocalStorage, { iUseLocalStorage } from '@hooks/useLocalstorage';
import AmazeToast from '@core/Toast';
import styles from './index.module.scss';
import { Anchor, toggleMuiDrawer } from '@components/core/Drawer/Drawer';
import { DrawerChild } from '@Redux-store/type';

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
    side: 'left',
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
  const [status, setStatus] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const getLocation = (): void => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      dispatch(toggleMagnifiedLoader(true));
      navigator.geolocation.getCurrentPosition(
        position => {
          setStatus('');
          axios
            .get(
              `${process.env.NEXT_PUBLIC_GET_LOCATION_URL}?key=${process.env.NEXT_PUBLIC_GET_LOCATION_API_KEY}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
            )
            .then((data: AxiosResponse<any, any>) => {
              AmazeToast({
                message: 'Location Fetched Successfully',
                type: 'success',
                position: 'bottom-left',
              });
              localStorage.setItem('current_Address', data?.data);
              localStorage.setItem(
                'current_minified_Address',
                data?.data?.display_name
              );
              dispatch(setGeoLocation(data?.data?.display_name));
              const minifiedAddress: string = data?.data.display_name
                .split(',')
                .slice(0, 4)
                .join(',');
              setAddress(minifiedAddress);
              dispatch(toggleMagnifiedLoader(false));
              toggleIsLocationAvailable(true);
            })
            .catch(() => {
              AmazeToast({
                message: 'Something went wrong!',
                type: 'error',
              });
              dispatch(toggleMagnifiedLoader(false));
              toggleIsLocationAvailable(false);
              return;
            });
        },
        () => {
          setStatus('Unable to retrieve your location');
        }
      );
    }
  };

  const authButtonsAction = (item: IauthBtns): void => {
    toggleMuiDrawer(item.side, true, dispatch);
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
                  value={address}
                  inputSize="medium"
                  style={{ fontSize: '1.5rem' }}
                />
              </div>
              <div className={styles.detect_location_btn}>
                <Button
                  label={'Detect Me'}
                  btnSize={'medium'}
                  onClick={getLocation}
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
