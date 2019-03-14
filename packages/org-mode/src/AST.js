import React, { Component } from "react";
import { parse } from "orga";
import WalkTree from "./WalkTree";

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
        {ast && ast.children && ast.children.length > 0 ? (
          <DOMTree node={ast} theme={theme} />
        ) : null}
      </div>
    );
  }
}

const DOMTree = ({ node, theme }) => {
  return <WalkTree node={node} theme={theme} />;
};

export default AST;
