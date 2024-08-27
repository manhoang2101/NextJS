import React from 'react';
import { Layout } from 'antd';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';

import { LayoutStyled, ContentStyled } from './styled';

type LayoutProps = {
  children: React.ReactNode | React.ReactElement;
};

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyled>
      <Sidebar />
      <Layout>
        <Header />
        <ContentStyled>{children}</ContentStyled>
        <Footer />
      </Layout>
    </LayoutStyled>
  );
};

export default MainLayout;
