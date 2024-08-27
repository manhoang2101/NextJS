import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

import { RootState } from '@/redux/store';
import { decrement, increment } from '@/redux/slices/homeSlice';
import storage from '@/utils/storage';

import Button from '@/components/button/Button';

const HomePage: React.FC = () => {
  const value = useSelector((state: RootState) => state.home.value);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const changeLanguage = (locale: string) => {
    router.replace({ pathname, query }, asPath, {
      locale: locale,
    });
    i18n.changeLanguage(locale);
    storage().set('locale', locale)
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>{t('welcome')}</p>

      <h1>{value}</h1>

      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('vi')}>Tiếng Việt</Button>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  );
};

export default HomePage;

export async function getServerSideProps({ locale }: any) {
  return {
    props: {
      initialLocale: locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
