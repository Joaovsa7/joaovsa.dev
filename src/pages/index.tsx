import React from "react";
import SEO from "../utils/helpers/seo";
import Layout from "../templates/Layout/index";
import Resume from "../organisms/Resume";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Página Inicial"
        keywords={[`react`, `desenvolvedor`, `front-end`, `portfolio`]}
      />
      <Resume />
    </Layout>
  );
};

export default IndexPage;
