import React from "react";
import { graphql } from "gatsby";
import { parse } from "orga";
import { DocTree, defaultTheme } from "@ahrjarrett/org-mode";
import styled from "styled-components";

const OrgWrapper = styled.div`
  width: 1000px;
`;

// pageContext is passed thru via context object in gatsby-node.js
const Template = ({ data, pageContext }) => {
  console.log("data:", data);
  console.log("pageContext:", pageContext);
  const { html } = data.orgContent;
  const ast = parse(html);

  console.log(ast);

  return (
    <OrgWrapper>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {/* <DocTree node={ast} theme={defaultTheme} /> */}
    </OrgWrapper>
  );
};

export const pageQuery = graphql`
  query OrgContentBySlug($slug: String!) {
    orgContent(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`;

export default Template;
