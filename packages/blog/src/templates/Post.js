import React from "react";
import { graphql } from "gatsby";
import { parse } from "orga";
import { DocTree } from "@ahrjarrett/org-mode";
import styled from "styled-components";

const OrgWrapper = styled.div`
  width: 1000px;
`;

// pageContext is passed thru via context object in gatsby-node.js
const Template = ({ data, pageContext }) => {
  const { content } = data.githubFile;
  const ast = parse(content);

  console.log(ast);

  return (
    <OrgWrapper>
      <DocTree node={ast} />
    </OrgWrapper>
  );
};

export const pageQuery = graphql`
  query OrgFilesOnGithub($base: String!) {
    githubFile(base: { eq: $base }) {
      content
    }
  }
`;

export default Template;
