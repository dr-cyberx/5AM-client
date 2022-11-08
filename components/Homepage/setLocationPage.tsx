import React, { memo } from 'react';
import Image from 'next/image';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import styles from './index.module.scss';
import Button from '../core/Button/Button';
import Typewritter from '../core/Typewritter/Typewritter';
import Input from '../core/Input/Input';

interface IauthBtns {
  label: string;
  variant: 'text' | 'contained' | 'outlined';
  style: { backgroundColor?: string };
}

const authBtns: IauthBtns[] = [
  {
    label: 'LOGIN',
    variant: 'text',
    style: {},
  },
  {
    label: 'SIGN UP',
    variant: 'contained',
    style: { backgroundColor: 'black' },
  },
];

const SetLocationPage: React.FunctionComponent = (): JSX.Element => {
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
                <Input inputSize="medium" style={{ fontSize: '1.5rem' }} />
              </div>
              <div className={styles.detect_location_btn}>
                <Button
                  label={'Detect Me'}
                  btnSize={'medium'}
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
