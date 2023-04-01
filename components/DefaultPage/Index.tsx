import { useRouter } from 'next/router';
import Image from 'next/image';
// import Homepage from '../components/Homepage';
import Grid from '@mui/material/Grid/Grid';
import {
  LinearProgress,
  Theme,
  ThemeProvider,
  Zoom,
  createTheme,
} from '@mui/material';

import { colors } from '@components/core/variable';
import { useEffect } from 'react';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: '#ffff',
    },
  },
});

export default function DefaultPage(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/home');
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        height={'80vh'}
      >
        {/* <Homepage /> */}
        <Grid item>
          <Zoom in {...(true ? { timeout: 500 } : {})}>
            <Grid item>
              <Image
                src={'/5AM-logo.png.png'}
                alt="logo"
                width={200}
                height={200}
              />
            </Grid>
          </Zoom>
          <LinearProgress />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
