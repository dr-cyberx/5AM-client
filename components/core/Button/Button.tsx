import React, { CSSProperties, memo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Theme } from '@mui/material';
import { orange, grey } from '@mui/material/colors';
import styles from './Button.module.scss';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      contrastText: grey[50],
    },
  },
});

interface IBtn {
  label?: string;
  variant?: 'text' | 'contained' | 'outlined';
  isDisabled?: boolean;
  onClick?: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  style?: CSSProperties;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  btnSize?: 'small' | 'medium' | 'large';
}

const Btn: React.FunctionComponent<IBtn> = ({
  label,
  variant,
  isDisabled,
  onClick,
  color,
  style,
  startIcon,
  endIcon,
  btnSize,
}): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant={variant}
          disabled={isDisabled}
          onClick={onClick}
          color={color}
          style={
            btnSize === 'large' ? { height: '56px', ...style } : { ...style }
          }
          startIcon={startIcon}
          endIcon={endIcon}
          className={styles.btn}
          size={btnSize}
        >
          {label}
        </Button>
      </ThemeProvider>
    </>
  );
};

Btn.defaultProps = {
  btnSize: 'medium',
  color: 'primary',
  endIcon: <></>,
  isDisabled: false,
  label: '5AM Buton',
  onClick: () => '',
  startIcon: <></>,
  style: {},
  variant: 'contained',
};

export default memo(Btn);
