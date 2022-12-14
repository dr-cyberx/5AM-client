import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styles from './loader.module.scss';

interface iGlobalLoader {
  color: string;
  visible: boolean;
}

const GlobalLoader: React.FunctionComponent<iGlobalLoader> = ({
  color,
  visible,
}): JSX.Element => {
  return (
    <>
      {visible ? (
        <div className={styles.global_loader}>
          <ThreeDots
            height="150"
            width="150"
            ariaLabel="5AM-loader"
            radius="9"
            color={color || '#4fa94d'}
            wrapperStyle={{}}
            visible={visible}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default GlobalLoader;
