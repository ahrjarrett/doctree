import React, { Component } from "react";
import WalkTree from "./WalkTree";
import { HL } from "./Outline";
import { v4 } from "node-uuid";

class Headline extends Component {
  constructor(props) {
    super(props);
    this.uuid = v4();
    this.state = {
      display: true
    };

    this.sectionContents = null;
  }

  componentDidMount() {
    const headline = document.getElementById(`org__headline-${this.uuid}`);
    this.sectionContents = new Array(...headline.parentElement.children).slice(
      1
    );

    window.contents = this.sectionContents;
    window.headline = headline;
  }

  componentDidUpdate(_, prevState) {
    const { display } = this.state;
    if (prevState.display !== display) {
      window.contents = this.sectionContents;
      this.sectionContents.forEach((section, i) => {
        window.section = section;
        const children = section.querySelector("*");
        // section.style.display = display ? "block" : "none";
        section.style.visibility = display ? "visible" : "hidden";
        section.style.height = display ? "auto" : 0;
        // section.style.marginTop = display ? "inherit" : 0;
        section.style.marginBottom = display ? "inherit" : 0;
        // section.style.padding = display ? "auto" : 0;
        const nested = section.querySelectorAll("*");
        window.nested = nested;

        nested.forEach(n => {
          n.style.visibility = display ? "visible" : "hidden";
          n.style.height = display ? "auto" : 0;
          // n.style.marginTop = display ? "inherit" : 0;
          // n.style.marginBottom = display ? "inherit" : 0;
        });
      });
    }
  }

  toggleSection = node => e => {
    this.setState({ display: !this.state.display });
  };

  render() {
    const { level, node } = this.props;
    return (
      <div id={`org__headline-${this.uuid}`} onClick={this.toggleSection(node)}>
        <HL level={level} open={this.state.display}>
          {node.children.map((child, i) => (
            <WalkTree node={child} level={level} key={i} />
          ))}
        </HL>
      </div>
    );
  }
}

export default Headline;
