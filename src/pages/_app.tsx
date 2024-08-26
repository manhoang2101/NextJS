import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { store } from '../redux/store';
import '../styles/globals.css';
import 'antd/dist/reset.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
