import React, { useState } from 'react';
import { Link } from 'gatsby';
import Image from '../components/image';
import SEO from '../components/seo';
import Layout from '../components/layout/index';
import { Logo } from '../components/Logo/index';
import ToggleButon from '../components/ToggleTheme';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <Logo />
      <ToggleButon />
    </Layout>
  );
};

export default IndexPage;
