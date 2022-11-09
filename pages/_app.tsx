import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@Redux-store/store';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
