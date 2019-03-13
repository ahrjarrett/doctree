import React, { Component } from "react";
import WalkTree from "./WalkTree";
import { OrgList, OrgListItem, Src } from "./Outline";

export const List = ({ node, level, open, ...props }) =>
  !open ? null : (
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

export const ListItem = ({ node, level, open, nth }) =>
  !open ? null : (
    <OrgListItem char={node.parent.ordered ? nth : "-"}>
      {node.children.map((child, i) => (
        <WalkTree node={child} level={level} key={i} />
      ))}
    </OrgListItem>
  );

export const Source = ({ node, open }) =>
  !open ? null : <Src lang={node.params.join(" ")}>{node.value}</Src>;

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: this.props.open
    };
  }

  toggleSection = node => e => {
    this.setState({ display: !this.state.display });
  };

  render() {
    const { node, open } = this.props;
    return (
      <div className="org__section">
        {!open
          ? null
          : node.children.map((child, i) => (
              <WalkTree
                node={child}
                level={node.level}
                key={i}
                open={this.state.display}
                toggleSection={this.toggleSection}
              />
            ))}
      </div>
    );
  }
}
