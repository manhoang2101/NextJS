import React from 'react';
import { Layout } from 'antd';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Footer from './footer/Footer';

import { LayoutStyled, ContentStyled } from './styled';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
