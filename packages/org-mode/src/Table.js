import React, { Component } from "react";
import { TableStyles } from "./OrgTheme";

const getCellLength = node => {
  let len = 0;
  const recurse = ({ children, type, value }) => {
    // console.group("recurse");
    // console.log("calling recurse, node type:", type);
    // console.log("calling recurse, node children:", children);
    // console.log("calling recurse, len:", len);
    // console.groupEnd("recurse");

    if (type === "text") len = len + value.length;
    children.forEach(child => recurse(child));
  };

  recurse(node);
  return len;
};

class Table extends Component {
  constructor(props) {
    super(props);

    const tableAst = this.props.node;
    const { children } = tableAst;
    const rows = children.filter(row => row.type === "table.row");

    this.separatorIndexes = children.reduce(
      (acc, curr, i) => (curr.type === "table.separator" ? acc.concat(i) : acc),
      []
    );

    // [29, 5, 5, 6]
    this.maxLengths = rows.reduce((acc, curr) => {
      const cellLengths = curr.children.map(getCellLength);
      cellLengths.forEach((length, i) => {
        acc[i] = length > acc[i] ? length : acc[i];
      });
      return acc;
    }, new Array(rows[0].children.length).fill(0));

    // console.group("TABLE COMPONENT");
    // console.log("tableAst", tableAst);
    // console.log("children", children);
    // console.log("rows", rows);
    // console.log("separatorIndexes", this.separatorIndexes);

    // console.log("\n\n");
    // // console.log(getCellLength(rows[2].children[0]));
    // console.log("maxLengths", this.maxLengths);
    // console.groupEnd("TABLE COMPONENT");

    // this.maxLengths = Array(this.props.)
  }

  render() {
    const { node, WalkTreeComponent } = this.props;
    const separators = this.maxLengths.map(len => "-".repeat(len));
    console.log("separators:", separators);
    return (
      <TableStyles className="org__table">
        <table>
          <tbody>
            {node.children.map((child, i) => {
              if (this.separatorIndexes.includes(i)) {
                return (
                  <tr className="org__table-separator-row" key={i}>
                    {separators.map((separator, index) => (
                      <td className="org__table-separator-cell" key={index}>
                        {separator}
                      </td>
                    ))}
                  </tr>
                );
              }
              return (
                <WalkTreeComponent
                  node={child}
                  level={node.level}
                  key={i}
                  tableRowIndex={i}
                  maxLengths={this.maxLengths}
                />
              );
            })}
          </tbody>
        </table>
      </TableStyles>
    );
  }
}

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whiteSpace: ""
    };
    this.cell = React.createRef();
    this.textLength = 0;
    this.padding = 0;
  }

  componentDidMount() {
    window.cell = this.cell;

    const { cellLength } = this.props;
    const innerText = this.cell.current.innerText;

    this.textLength = innerText ? innerText.length : 0;
    this.padding = cellLength - this.textLength;
    this.setState({ whiteSpace: `M`.repeat(this.padding) });

    console.log("textLength:", this.textLength);
    console.log("padding:", this.padding);
    console.log("whiteSpace:", this.state.whiteSpace);
  }

  render() {
    const { WalkTreeComponent, node, cellLength } = this.props;
    console.log("node:", node);
    console.log("cellLength:", cellLength);

    const cell = node.children.map((child, i) => (
      <WalkTreeComponent node={child} level={node.level} key={i} />
    ));
    return (
      <td className="org__table-cell" ref={this.cell}>
        {cell}
        <span className="org__table-whitespace" style={{ opacity: 0 }}>
          {this.state.whiteSpace}
        </span>
      </td>
    );
  }
}

export { Table, Cell };
