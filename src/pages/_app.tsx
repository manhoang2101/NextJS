import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import { App as AntApp, ConfigProvider } from 'antd';

import { DefaultThemeStyled, Theme } from '@/theme';
import { store } from '../redux/store';

import MainLayout from '@/components/layout/private-layout/PrivateLayout';
import PublicLayout from '@/components/layout/public-layout/PublicLayout';

import '../styles/globals.css';
import 'antd/dist/reset.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const urlLogin = ['/login'];

  const getLayout = urlLogin.includes(router.pathname)
    ? (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>
    : (page: React.ReactNode) => <MainLayout>{page}</MainLayout>;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <ConfigProvider
          theme={{ ...Theme }}
          button={{ autoInsertSpace: false }}
        >
          <ThemeProvider theme={{ ...DefaultThemeStyled }}>
            <AntApp>{getLayout(<Component {...pageProps} />)}</AntApp>
          </ThemeProvider>
        </ConfigProvider>
      </Provider>
    </>
  );
}

export default appWithTranslation(App);
