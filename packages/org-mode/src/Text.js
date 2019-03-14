import React from "react";
import WalkTree from "./WalkTree";
import { OrgLink } from "./Org";

export const Code = ({ node, level, open }) =>
  !open ? null : (
    <span className="org__code">
      {node.children.map((child, i) => (
        <WalkTree node={child} level={level} key={i} />
      ))}
    </span>
  );

export const Text = ({ node, open }) =>
  !open ? null : <span className="org__text">{node.value}</span>;

export const Verbatim = ({ node, level, open }) =>
  !open ? null : (
    <span className="org__verbatim">
      {node.children.map((child, i) => (
        <WalkTree node={child} level={level} key={i} />
      ))}
    </span>
  );

export const Link = ({ node, open }) =>
  !open ? null : (
    <OrgLink
      to={node.uri.raw}
      newTab={node.uri.protocol === "file" ? false : true}
    >
      {node.desc}
    </OrgLink>
  );

export const Paragraph = ({ node, level, open }) =>
  !open ? null : (
    <p className="org__paragraph">
      {node.children.map((child, i) => (
        <WalkTree node={child} level={level} key={i} />
      ))}
    </p>
  );

export const Italic = ({ node, level, open }) =>
  !open ? null : (
    <i className="org__italic">
      {node.children.map((child, i) => (
        <WalkTree node={child} level={level} key={i} />
      ))}
    </i>
  );

export const Bold = ({ node, level, open }) =>
  !open ? null : (
    <b className="org__bold">
      {node.children.map((child, i) => (
        <WalkTree node={child} level={level} key={i} />
      ))}
    </b>
  );

export const Underline = ({ node, level, open }) =>
  !open ? null : (
    <span className="org__underline">
      {node.children.map((child, i) => (
        <WalkTree node={child} level={level} key={i} />
      ))}
    </span>
  );

export const StrikeThrough = ({ node, level, open }) =>
  !open ? null : (
    <span className="org__strike-through">
      {node.children.map((child, i) => (
        <WalkTree node={child} level={level} key={i} />
      ))}
    </span>
  );
