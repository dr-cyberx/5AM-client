import AmazeToast from '@components/core/Toast';
import { iUseLocalStorage } from '@hooks/useLocalstorage';
import { setGeoLocation } from '@Redux-store/index';
import {
  ActionCreatorWithPayload,
  AnyAction,
  Dispatch,
} from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

export const getLocation = (
  setStatus: React.Dispatch<React.SetStateAction<string>>,
  dispatch: Dispatch<AnyAction>,
  toggleMagnifiedLoader: ActionCreatorWithPayload<
    boolean,
    'rootState/toggleMagnifiedLoader'
  >,
  setAddress: React.Dispatch<React.SetStateAction<string>>,
  toggleIsLocationAvailable: (arg: boolean) => void,
  setValue: UseFormSetValue<FieldValues>,
  localStorage: iUseLocalStorage
): void => {
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
            setValue('location', minifiedAddress);
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
