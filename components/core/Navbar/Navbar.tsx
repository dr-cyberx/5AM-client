import React, { memo } from 'react';
import styles from './Navbar.module.scss';

const Navbar: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navItems}>
          <div className={styles.logo_location_section}></div>
          <div className={styles.nav_links}></div>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
