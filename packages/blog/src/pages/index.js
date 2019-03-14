import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = ({ data, ...props }) => {
  const { edges } = data.allOrgContent;
  const posts = edges.map(({ node }, i) => {
    return (
      <div key={i}>
        <h2>
          <Link to={`${node.fields.slug}`}>{node.meta.title}</Link>
        </h2>
      </div>
    );
  });

  return (
    <Layout>
      <SEO title="Home" keywords={[`org-mode`, `emacs`, `graphql`]} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
        {posts}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allOrgContent {
      edges {
        node {
          fields {
            slug
          }
          meta {
            title
          }
        }
      }
    }
  }
`;
