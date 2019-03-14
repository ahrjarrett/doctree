import React from "react";
import { graphql } from "gatsby";
import { parse } from "orga";
import { WalkTree } from "@ahrjarrett/org-mode";

// pageContext is passed thru via context object in gatsby-node.js
const Template = ({ data, pageContext }) => {
  const { content } = data.githubFile;
  const ast = parse(content);

  return <WalkTree node={ast} />;
};

export const pageQuery = graphql`
  query OrgFilesOnGithub($base: String!) {
    githubFile(base: { eq: $base }) {
      content
    }
  }
`;

export default Template;
