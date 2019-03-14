import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const { edges } = data.allGithubFile;
  const posts = edges.map(({ node }, i) => {
    return (
      <div key={i}>
        <h2>
          <Link to={`/${node.base}`}>{node.base}</Link>
        </h2>
      </div>
    );
  });

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
    allGithubFile(
      filter: {
        relativePath: { regex: "/^(packages/data/src/org/).+(.org)$/" }
      }
    ) {
      edges {
        node {
          base
        }
      }
    }
  }
`;