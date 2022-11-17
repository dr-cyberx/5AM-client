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
import { useController } from 'react-hook-form';
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
  name: string;
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
  rules: any;
  control: any;
  ref?: any;
  isFocused?: boolean;
}

const Input: React.FunctionComponent<Iinput> = ({
  label,
  name,
  isFocused,
  type,
  inputSize,
  rules,
  control,
  ref,
  style,
}): JSX.Element => {
  const {
    field: { onChange, value },
    fieldState,
  } = useController({
    name,
    control,
    rules,
  });
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
                ref={ref}
                style={style}
                autoFocus={isFocused || false}
                className={styles.input}
                onChange={onChange}
                name={name}
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
            ref={ref}
            className={styles.input}
            focused={isFocused || false}
            variant="outlined"
            style={style}
            value={value}
            onChange={onChange}
            name={name}
            type={type}
          />
        )}
      </ThemeProvider>
    </>
  );
};

export default Input;
