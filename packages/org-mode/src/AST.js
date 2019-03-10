import React, { Component } from "react";
import { parse } from "orga";
import * as org from "./Outline";

const DOMTree = ({ node, theme }) => {
  const WalkTree = ({ node, level = 0, ...props }) => {
    console.log("WalkTree:", node);

    if (node.type === "root") {
      return (
        <org.Outline theme={theme} className="org__root">
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} key={i} />
          ))}
        </org.Outline>
      );
    }

    if (node.type === "text") {
      return <span className="org__text">{node.value}</span>;
    }

    if (node.type === "code") {
      return (
        <span className="org__code">
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} key={i} />
          ))}
        </span>
      );
    }

    if (node.type === "verbatim") {
      return (
        <span className="org__verbatim">
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} key={i} />
          ))}
        </span>
      );
    }

    if (node.type === "link") {
      return (
        <org.OrgLink
          to={node.uri.raw}
          newTab={node.uri.protocol === "file" ? false : true}
        >
          {node.desc}
        </org.OrgLink>
      );
    }

    if (node.type === "paragraph") {
      return (
        <p className="org__paragraph">
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} key={i} />
          ))}
        </p>
      );
    }

    if (node.type === "italic") {
      return (
        <i className="org__italic">
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} key={i} />
          ))}
        </i>
      );
    }

    if (node.type === "bold") {
      return (
        <em className="org__bold">
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} key={i} />
          ))}
        </em>
      );
    }

    if (node.type === "headline") {
      return (
        <org.HL level={level}>
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} key={i} />
          ))}
        </org.HL>
      );
    }

    if (node.type === "list") {
      return (
        <org.List
          ordered={node.ordered}
          style={{
            marginLeft: node.parent.type === "list.item" ? "1rem" : "inherit"
          }}
        >
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} nth={i + 1} key={i} />
          ))}
        </org.List>
      );
    }

    if (node.type === "list.item") {
      return (
        <org.ListItem char={node.parent.ordered ? props.nth : "-"}>
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} key={i} />
          ))}
        </org.ListItem>
      );
    }

    if (node.type === "section") {
      return (
        <div className="org__section">
          {node.children.map((child, i) => (
            <WalkTree node={child} level={node.level} key={i} />
          ))}
        </div>
      );
    }

    if (node.type === "block" && node.name === "SRC") {
      return <org.Src lang={node.params.join(" ")}>{node.value}</org.Src>;
    }
  };

  return <WalkTree node={node} />;
};

class AST extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ast: null
    };
  }

  async componentDidMount() {
    const ast = await parse(this.props.orgfile);
    this.setState({ ast });
  }

  render() {
    const { ast } = this.state;
    const { theme } = this.props;
    return (
      <div className="AST">
        {ast && ast.children && ast.children.length > 0 && (
          <DOMTree node={ast} theme={theme} />
        )}
      </div>
    );
  }
}

export default AST;
