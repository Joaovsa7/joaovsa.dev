import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

interface Props {
  description: string;
  lang: string;
  meta: string;
  keywords: string[];
  title: string;
  image: string;
}

const SEO: React.FC<Props> = ({
  description,
  lang,
  meta,
  keywords,
  title,
  image,
}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;

        const pageTitle = title || data.site.siteMetadata.title;
        const ogImage = image || data.site.siteMetadata.image;

        return (
          <>
            <Helmet
              htmlAttributes={{
                lang,
              }}
              title={pageTitle}
              titleTemplate={`%s | ${data.site.siteMetadata.title}`}
              meta={[
                {
                  name: `description`,
                  content: metaDescription,
                },
                {
                  property: `og:image`,
                  content: ogImage,
                },
                {
                  property: `og:title`,
                  content: title,
                },
                {
                  property: `og:image`,
                  content: data.site.siteMetadata.url,
                },
                {
                  property: `og:description`,
                  content: metaDescription,
                },
                {
                  property: `og:type`,
                  content: `website`,
                },
                {
                  name: `twitter:card`,
                  content: metaDescription,
                },
                {
                  name: `twitter:creator`,
                  content: data.site.siteMetadata.author,
                },
                {
                  name: `twitter:title`,
                  content: title,
                },
                {
                  name: `twitter:description`,
                  content: metaDescription,
                },
              ]
                .concat(
                  keywords.length > 0
                    ? {
                        name: `keywords`,
                        content: keywords.join(`, `),
                      }
                    : []
                )
                .concat(meta)}
            />
          </>
        );
      }}
    />
  );
};

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  keywords: [],
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
        url
        social {
          twitter
        }
      }
    }
  }
`;
