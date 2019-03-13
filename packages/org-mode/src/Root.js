import React from "react";
import { Meta } from "./OrgTheme";
import { Outline } from "./Outline";
import WalkTree from "./WalkTree";

const Root = ({ node, theme, level, ...props }) => {
  const keys = Object.keys(node.meta);
  return (
    <Outline theme={theme} className="org__root">
      {keys.length > 0 && (
        <div className="org__meta">
          {keys.map((key, i) => (
            <Meta className={`org__meta-${key}`} key={i}>
              <span className="org__meta-key">#+{key.toUpperCase()}:</span>
              <span className="org__meta-value">{node.meta[key]}</span>
            </Meta>
          ))}
        </div>
      )}
      {node.children.map((child, i) => (
        <WalkTree node={child} level={level} key={i} {...props} />
      ))}
    </Outline>
  );
};

export default Root;
