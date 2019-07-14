import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout/index';
import FeaturedTeaser from '../components/HomeFeaturedText';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title='Página Inicial'
        keywords={[`react`, `desenvolvedor`, `front-end`, `portfolio`]}
      />
      <FeaturedTeaser
        stretch='40%'
        headText='Desenvolvedor front end.'
        text='Seja bem vindo ao meu site'
      />
    </Layout>
  );
};

export default IndexPage;
