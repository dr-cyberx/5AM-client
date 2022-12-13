import React from 'react';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import styles from './FindLocation.module.scss';
import Input, { iInputSize } from '../Input/Input';
import Button from '../Button/Button';

interface ifindLocation {
  control: any;
  inputName: string;
  handleDetectLocation: () => void;
}

const FindLocation: React.FunctionComponent<ifindLocation> = ({
  control,
  inputName,
  handleDetectLocation,
}) => {
  return (
    <>
      <div className={styles.detectLocation_container}>
        <div className={styles.detect_location}>
          <div className={styles.detect_location_input}>
            <Input
              name={inputName}
              rules={{ required: true }}
              control={control}
              label="Location"
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
    </>
  );
};

export default FindLocation;
