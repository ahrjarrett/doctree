import React from "react";
import WalkTree from "./WalkTree";
import { HL } from "./Outline";

const Headline = ({ level, node, open, toggleSection }) => (
  <div id={`org__headline-wrapper`} onClick={toggleSection(node)}>
    <HL level={level} open={open}>
      {node.children.map((child, i) => (
        <WalkTree node={child} level={level} key={i} />
      ))}
    </HL>
  </div>
);

export default Headline;