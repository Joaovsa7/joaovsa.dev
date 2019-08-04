import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout/index';
import { PageWrapper } from '../style';
import Heading from '../components/Heading';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title='Sobre mim' keywords={[`sobre`, `desenvolvedor`, `react`, `developer`]} />
      <PageWrapper>
        <Heading>...</Heading>
      </PageWrapper>
    </Layout>
  );
};

export default AboutPage;
