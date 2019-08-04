import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout/index';
import Heading from '../components/Heading';
import { PageWrapper, Paragraph } from '../style';
import SocialNetworks from '../components/SocialNetworks';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Página Inicial' keywords={[`react`, `desenvolvedor`, `front-end`, `portfolio`]} />
      <PageWrapper>
        <Heading tag='h1'>Oi, sou o João.</Heading>
        <Paragraph>E sou desenvolvedor front-end :)</Paragraph>
        <SocialNetworks />
      </PageWrapper>
    </Layout>
  );
};

export default IndexPage;
