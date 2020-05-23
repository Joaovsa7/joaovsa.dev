import React from "react";
import SEO from "../utils/helpers/seo";
import Layout from "../templates/Layout/index";
import { PageWrapper } from "../style";

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        title="Sobre mim"
        keywords={[`sobre`, `desenvolvedor`, `react`, `developer`]}
      />
      <PageWrapper></PageWrapper>
    </Layout>
  );
};

export default AboutPage;
