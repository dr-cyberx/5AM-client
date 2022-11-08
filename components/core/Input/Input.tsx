import React, { CSSProperties } from 'react';
import {
  createTheme,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Theme,
  ThemeProvider,
} from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from './Input.module.scss';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      contrastText: grey[50],
    },
  },
});

interface Iinput {
  label?: string;
  value?: string;
  onChange?: () => void;
  inputSize?: 'medium' | 'small';
  type?:
    | 'email'
    | 'file'
    | 'hidden'
    | 'number'
    | 'password'
    | 'reset'
    | 'submit'
    | 'tel'
    | 'text';
  style?: CSSProperties;
}

const Input: React.FunctionComponent<Iinput> = ({
  label,
  value,
  onChange,
  type,
  inputSize,
  style,
}): JSX.Element => {
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = (): void => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {type === 'password' ? (
          <>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={value}
                size={inputSize}
                style={style}
                className={styles.input}
                onChange={onChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={label}
              />
            </FormControl>
          </>
        ) : (
          <TextField
            id="outlined-basic"
            label={label}
            size={inputSize}
            className={styles.input}
            variant="outlined"
            style={style}
            value={value}
            onChange={onChange}
            type={type}
          />
        )}
      </ThemeProvider>
    </>
  );
};

export default Input;
