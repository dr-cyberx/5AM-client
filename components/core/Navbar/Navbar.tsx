import React, { memo, useState, useRef } from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SupportIcon from '@mui/icons-material/Support';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { colors } from '../variable';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.scss';
import Tooltip from '@mui/material/Tooltip';

interface linkItem {
  title: string;
  icon?: React.ReactNode;
}

const iconStyle: any = {
  fontSize: 'medium',
  style: { paddingTop: '3px' },
};

const navLinkItems: linkItem[] = [
  {
    title: 'Search',
    icon: <SearchIcon {...iconStyle} />,
  },
  {
    title: 'Offers',
    icon: <AutoAwesomeIcon {...iconStyle} />,
  },
  {
    title: 'Help',
    icon: <SupportIcon {...iconStyle} />,
  },
  {
    title: 'Sign In',
    icon: <AccountCircleIcon {...iconStyle} />,
  },
  {
    title: 'Cart',
    icon: <ShoppingCartIcon {...iconStyle} />,
  },
];

interface INavbar {
  geoLocation?: string;
}

const Navbar: React.FunctionComponent<INavbar> = ({
  geoLocation,
}): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<number>(100);
  const { currentGeoLocation } = useSelector((state: any) => state.rootState);

  const handleNavIndex = (index: number): void => {
    setCurrentTab(index);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navItems}>
          <div className={styles.logo_location_section}>
            <div className={styles.logo_container}>
              <Image
                src={'/5AM-logo.png.png'}
                alt="logo"
                width={90}
                height={90}
              />
            </div>
            <Tooltip title={currentGeoLocation}>
              <div className={styles.geoLocation_container}>
                {currentGeoLocation.substring(0, 30) + '...'}
              </div>
            </Tooltip>
          </div>
          <div className={styles.nav_links}>
            <ul>
              {navLinkItems.map((item: linkItem, index: number) => {
                return (
                  <li
                    key={item.title}
                    style={
                      currentTab === index
                        ? { color: colors.primary }
                        : { color: 'inherit' }
                    }
                    onClick={() => handleNavIndex(index)}
                  >
                    {item.icon ? item.icon : <></>}
                    <span>{item.title}</span>
                    {index === currentTab ? (
                      <motion.div
                        className={styles['underline']}
                        layoutId="underline"
                      />
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Navbar);
