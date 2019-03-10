import React, { Component } from "react";
import { parse } from "orga";

const DOMTree = ({ node }) => {
  const WalkTree = ({ node, level = 0 }) => {
    console.log("calling WalkTree, node:", node);

    if (node.type === "root") {
      return (
        <div className="org__root">
          <WalkTree node={node.children[0]} level={0} />
        </div>
      );
    }

    if (node.type === "text") {
      return <span className="org__text">{node.value}</span>;
    }

    if (node.type === "link") {
      return node.uri.protocol === "file" ? (
        <a className="org__link org__link-internal" href={node.uri.raw}>
          {node.desc}
        </a>
      ) : (
        <a
          className="org__link org__link-external"
          href={node.uri.raw}
          target="_blank"
          rel="noopener noreferrer"
        >
          {node.desc}
        </a>
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
        <p className={`org__headline org__bullet-${level}`}>
          {level}:{" "}
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} key={i} />
          ))}
        </p>
      );
    }

    if (node.type === "list") {
      return (
        <ul className="org__list">
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} key={i} />
          ))}
        </ul>
      );
    }

    if (node.type === "list.item") {
      return (
        <li className="org__list-item">
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} key={i} />
          ))}
        </li>
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
      return (
        <div className="org__src-block">
          {node.params.length && (
            <p className="org__src-lang">
              <span>{node.params.join(" ")}</span>
            </p>
          )}
          <p className="org__src-body">{node.value}</p>
        </div>
      );
    }
  };

  return <WalkTree node={node} />;
};

class AST extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ast: ""
    };
  }

  async componentDidMount() {
    const ast = await parse(this.props.orgfile);
    window.ast = ast;

    this.setState({ ast });
  }

  render() {
    const { ast } = this.state;
    return (
      <React.Fragment>
        {ast.children && ast.children.length > 0 && <DOMTree node={ast} />}
      </React.Fragment>
    );
  }
}

export default AST;
