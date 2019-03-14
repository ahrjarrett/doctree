import React from "react";
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
  switch (node.type) {
    case "text":
      return <Text node={node} open={open} />;

    case "root":
      return <Root node={node} theme={theme} level={level} {...props} />;

    case "code":
      return <Code node={node} level={level} open={open} />;

    case "verbatim":
      return <Verbatim node={node} level={level} open={open} />;

    case "link":
      return <Link node={node} open={open} />;

    case "paragraph":
      return <Paragraph node={node} level={level} open={open} />;

    case "italic":
      return <Italic node={node} level={level} open={open} />;

    case "bold":
      return <Bold node={node} level={level} open={open} />;

    case "underline":
      return <Underline node={node} level={level} open={open} />;

    case "strikeThrough":
      return <StrikeThrough node={node} level={level} open={open} />;

    case "headline":
      return (
        <Headline
          node={node}
          level={level}
          toggleSection={toggleSection}
          open={open}
        />
      );

    case "section":
      return <Section node={node} open={open} {...props} />;

    case "list":
      return <List node={node} level={level} open={open} {...props} />;

    case "list.item":
      return <ListItem node={node} level={level} nth={nth} open={open} />;

    case "block":
      if (node.name === "SRC") return <Source node={node} open={open} />;
      break;

    case "table":
      return <Table node={node} {...props} open={open} />;

    case "table.row":
      return <TableRow node={node} {...props} open={open} />;

    case "table.separator":
      return null;

    case "table.cell":
      const cellLength = props.maxLengths[cellIndex];
      return <Cell node={node} cellLength={cellLength} open={open} />;
    default:
      return null;
  }
};

export default WalkTree;
