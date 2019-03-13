import React, { Component } from "react";

const getCellLength = node => {
  let len = 0;
  const recurse = node => {
    console.log("calling recurse, node:", node);
    if (node.children.length === 1) {
      len = len + node.children[0].value.length;
    }
    node.children.forEach(child => {
      recurse(child);
    });
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
    }, new Array(rows.length + 1).fill(0));

    console.group("TABLE COMPONENT");
    console.log("tableAst", tableAst);
    console.log("children", children);
    console.log("rows", rows);
    console.log("separatorIndexes", this.separatorIndexes);

    console.log("\n\n");
    // console.log(getCellLength(rows[2].children[0]));
    console.log("maxLengths", this.maxLengths);
    console.groupEnd("TABLE COMPONENT");

    // this.maxLengths = Array(this.props.)
  }

  render() {
    const { node, WalkTreeComponent } = this.props;
    const separators = this.maxLengths.map(len => "-".repeat(len));
    return (
      <div className="org__table">
        <table>
          <tbody>
            {node.children.map((child, i) => {
              if (this.separatorIndexes.includes(i)) {
                return (
                  <tr className="org__table-separator">
                    {separators.map(separator => (
                      <td>{separator}</td>
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
      </div>
    );
  }
}

export default Table;
