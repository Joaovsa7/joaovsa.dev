import React, { useState } from 'react';
import Image from '../components/image';
import SEO from '../components/seo';
import Layout from '../components/layout/index';
import { Logo } from '../components/Logo/index';
import SwitchTheme from '../components/SwitchTheme';
import Header from '../components/Header';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <Header>
        <Logo />
        <SwitchTheme />
      </Header>
    </Layout>
  );
};

export default IndexPage;
