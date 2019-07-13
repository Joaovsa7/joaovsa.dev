import React, { useState } from 'react';
import Image from '../components/image';
import SEO from '../components/seo';
import Layout from '../components/layout/index';
import { Logo } from '../components/Logo/index';
import SwitchTheme from '../components/SwitchTheme';
import Header from '../components/Header';
import { FeaturedText } from '../components/HomeFeaturedText/style';
import FeaturedTeaser from '../components/HomeFeaturedText';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Página Inicial' keywords={[`react`, `desenvolvedor`, `front-end`, `portfolio`]} />
      <FeaturedTeaser stretch="40%" headText="Olá, seja bem vindo ao meu site." />
    </Layout>
  );
};

export default IndexPage;
