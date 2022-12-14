import React, {
  CSSProperties,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
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

export enum iInputSize {
  MEDIUM = 'medium',
  SMALL = 'small',
}

export interface Iinput {
  label?: string;
  name: string;
  inputSize?: iInputSize;
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
}

const Input: React.FunctionComponent<Iinput> = forwardRef(
  ({ label, name, type, inputSize, rules, control, style }): JSX.Element => {
    const {
      field: { onChange, value },
      formState: { errors },
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
                  style={style}
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
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
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
              InputLabelProps={{ shrink: value }}
              name={name}
              type={type}
            />
          )}
        </ThemeProvider>
      </>
    );
  }
);

Input.displayName = 'Input';

export default Input;
