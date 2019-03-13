import React from "react";
import WalkTree from "./WalkTree";
import { OrgList, OrgListItem, Src } from "./Outline";

export const List = ({ node, level, ...props }) => (
  <OrgList
    ordered={node.ordered}
    style={{
      marginLeft: node.parent.type === "list.item" ? "1rem" : "inherit"
    }}
  >
    {node.children.map((child, i) => (
      <WalkTree node={child} level={level} nth={i + 1} key={i} {...props} />
    ))}
  </OrgList>
);

export const ListItem = ({ node, level, nth }) => (
  <OrgListItem char={node.parent.ordered ? nth : "-"}>
    {node.children.map((child, i) => (
      <WalkTree node={child} level={level} key={i} />
    ))}
  </OrgListItem>
);

export const Section = ({ node, ...props }) => (
  <div className="org__section">
    {node.children.map((child, i) => (
      <WalkTree node={child} level={node.level} key={i} {...props} />
    ))}
  </div>
);

export const Source = ({ node }) => (
  <Src lang={node.params.join(" ")}>{node.value}</Src>
);
