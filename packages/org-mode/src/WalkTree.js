import React from "react";

import * as org from "./Outline";
import { Cell, Table, TableRow } from "./Table";
import Headline from "./Headline";
import Root from "./Root";
import { Section, List } from "./Sections";
import {
  Text,
  Code,
  Verbatim,
  Link,
  Paragraph,
  Italic,
  Bold,
  Underline,
  StrikeThrough
} from "./Text";

const WalkTree = ({
  node,
  level = 0,
  cellLength,
  cellIndex,
  theme,
  ...props
}) => {
  // console.log("WalkTree:", node);

  if (node.type === "text") {
    return <Text node={node} />;
  }

  if (node.type === "root") {
    return (
      <Root
        node={node}
        theme={theme}
        level={level}
        WalkTreeComponent={WalkTree}
        {...props}
      />
    );
  }

  if (node.type === "code") {
    return <Code node={node} level={level} WalkTreeComponent={WalkTree} />;
  }

  if (node.type === "verbatim") {
    return <Verbatim node={node} level={level} WalkTreeComponent={WalkTree} />;
  }

  if (node.type === "link") {
    return <Link node={node} />;
  }

  if (node.type === "paragraph") {
    return <Paragraph node={node} level={level} WalkTreeComponent={WalkTree} />;
  }

  if (node.type === "italic") {
    return <Italic node={node} level={level} WalkTreeComponent={WalkTree} />;
  }

  if (node.type === "bold") {
    return <Bold node={node} level={level} WalkTreeComponent={WalkTree} />;
  }

  if (node.type === "underline") {
    return <Underline node={node} level={level} WalkTreeComponent={WalkTree} />;
  }

  if (node.type === "strikeThrough") {
    return (
      <StrikeThrough node={node} level={level} WalkTreeComponent={WalkTree} />
    );
  }

  if (node.type === "headline") {
    return <Headline node={node} level={level} WalkTreeComponent={WalkTree} />;
  }

  if (node.type === "section") {
    return <Section node={node} WalkTreeComponent={WalkTree} {...props} />;
  }

  if (node.type === "list") {
    return (
      <List node={node} level={level} WalkTreeComponent={WalkTree} {...props} />
    );
  }

  if (node.type === "block" && node.name === "SRC") {
    return <org.Src lang={node.params.join(" ")}>{node.value}</org.Src>;
  }

  if (node.type === "list.item") {
    return (
      <org.ListItem char={node.parent.ordered ? props.nth : "-"}>
        {node.children.map((child, i) => (
          <WalkTree node={child} level={level} key={i} {...props} />
        ))}
      </org.ListItem>
    );
  }

  if (node.type === "table") {
    return <Table WalkTreeComponent={WalkTree} node={node} {...props} />;
  }

  if (node.type === "table.row") {
    return <TableRow node={node} WalkTreeComponent={WalkTree} {...props} />;
  }

  if (node.type === "table.separator") {
    return null;
  }

  if (node.type === "table.cell") {
    const cellLength = props.maxLengths[cellIndex];
    return (
      <Cell node={node} cellLength={cellLength} WalkTreeComponent={WalkTree} />
    );
  }
};

export default WalkTree;
