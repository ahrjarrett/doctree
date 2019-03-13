import React from "react";
import * as org from "./Outline";
import { Cell, Table, TableRow } from "./Table";
import Headline from "./Headline";
import Root from "./Root";
import Section, { List, ListItem, Source } from "./Section";
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
  nth,
  toggleSection,
  open = true,
  ...props
}) => {
  // console.log("WalkTree:", node);
  // if (!open) return null;

  if (node.type === "text") {
    return <Text node={node} open={open} />;
  }

  if (node.type === "root") {
    return <Root node={node} theme={theme} level={level} {...props} />;
  }

  if (node.type === "code") {
    return <Code node={node} level={level} open={open} />;
  }

  if (node.type === "verbatim") {
    return <Verbatim node={node} level={level} open={open} />;
  }

  if (node.type === "link") {
    return <Link node={node} open={open} />;
  }

  if (node.type === "paragraph") {
    return <Paragraph node={node} level={level} open={open} />;
  }

  if (node.type === "italic") {
    return <Italic node={node} level={level} open={open} />;
  }

  if (node.type === "bold") {
    return <Bold node={node} level={level} open={open} />;
  }

  if (node.type === "underline") {
    return <Underline node={node} level={level} open={open} />;
  }

  if (node.type === "strikeThrough") {
    return <StrikeThrough node={node} level={level} open={open} />;
  }

  if (node.type === "headline") {
    return (
      <Headline
        node={node}
        level={level}
        toggleSection={toggleSection}
        open={open}
      />
    );
  }

  if (node.type === "section") {
    return <Section node={node} open={open} {...props} />;
  }

  if (node.type === "list") {
    return <List node={node} level={level} open={open} {...props} />;
  }

  if (node.type === "list.item") {
    return <ListItem node={node} level={level} nth={nth} open={open} />;
  }

  if (node.type === "block" && node.name === "SRC") {
    return <Source node={node} open={open} />;
  }

  if (node.type === "table") {
    return <Table node={node} {...props} open={open} />;
  }

  if (node.type === "table.row") {
    return <TableRow node={node} {...props} open={open} />;
  }

  if (node.type === "table.separator") {
    return null;
  }

  if (node.type === "table.cell") {
    const cellLength = props.maxLengths[cellIndex];
    return <Cell node={node} cellLength={cellLength} open={open} />;
  }
};

export default WalkTree;
