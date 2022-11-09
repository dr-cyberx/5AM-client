import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import styles from './loader.module.scss';

interface MagnifyLoader {
  visible: boolean;
  glassColor: string;
  color: string;
}

const MagnifyLoader: React.FunctionComponent<MagnifyLoader> = ({
  color,
  glassColor,
  visible,
}): JSX.Element => {
  return (
    <>
      {visible ? (
        <div className={styles.global_loader}>
          <MagnifyingGlass
            visible={visible}
            height="150"
            width="150"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor={glassColor}
            color={color}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MagnifyLoader;
