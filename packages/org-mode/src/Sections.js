import React from "react";
import { OrgList } from "./Outline";

const List = ({ node, level, WalkTreeComponent, ...props }) => (
  <OrgList
    ordered={node.ordered}
    style={{
      marginLeft: node.parent.type === "list.item" ? "1rem" : "inherit"
    }}
  >
    {node.children.map((child, i) => (
      <WalkTreeComponent
        node={child}
        level={level}
        nth={i + 1}
        key={i}
        {...props}
      />
    ))}
  </OrgList>
);

const Section = ({ node, WalkTreeComponent, ...props }) => (
  <div className="org__section">
    {node.children.map((child, i) => (
      <WalkTreeComponent node={child} level={node.level} key={i} {...props} />
    ))}
  </div>
);

export { Section, List };
