import React, { Component } from "react";
import WalkTree from "./WalkTree";
import { OrgLink } from "./Outline";

export const Code = ({ node, level }) => {
  return (
    <span className="org__code">
      {node.children.map((child, i) => (
        <WalkTree node={child} level={level} key={i} />
      ))}
    </span>
  );
};

export const Text = ({ node }) => (
  <span className="org__text">{node.value}</span>
);

export const Verbatim = ({ node, level }) => (
  <span className="org__verbatim">
    {node.children.map((child, i) => (
      <WalkTree node={child} level={level} key={i} />
    ))}
  </span>
);

export const Link = ({ node }) => (
  <OrgLink
    to={node.uri.raw}
    newTab={node.uri.protocol === "file" ? false : true}
  >
    {node.desc}
  </OrgLink>
);

export const Paragraph = ({ node, level }) => (
  <p className="org__paragraph">
    {node.children.map((child, i) => (
      <WalkTree node={child} level={level} key={i} />
    ))}
  </p>
);

export const Italic = ({ node, level }) => (
  <i className="org__italic">
    {node.children.map((child, i) => (
      <WalkTree node={child} level={level} key={i} />
    ))}
  </i>
);

export const Bold = ({ node, level }) => (
  <b className="org__bold">
    {node.children.map((child, i) => (
      <WalkTree node={child} level={level} key={i} />
    ))}
  </b>
);

export const Underline = ({ node, level }) => (
  <span className="org__underline">
    {node.children.map((child, i) => (
      <WalkTree node={child} level={level} key={i} />
    ))}
  </span>
);

export const StrikeThrough = ({ node, level }) => (
  <span className="org__strike-through">
    {node.children.map((child, i) => (
      <WalkTree node={child} level={level} key={i} />
    ))}
  </span>
);
