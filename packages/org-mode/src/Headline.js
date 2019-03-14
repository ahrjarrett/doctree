import React from "react";
import DocTree from "./DocTree";
import { HL } from "./Org";

const Headline = ({ level, node, open, toggleSection }) => (
  <div id={`org__headline-wrapper`} onClick={toggleSection(node)}>
    <HL level={level} open={open}>
      {node.children.map((child, i) => (
        <DocTree node={child} level={level} key={i} />
      ))}
    </HL>
  </div>
);

export default Headline;
