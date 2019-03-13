import React, { Component } from "react";
import { ThemeToggler } from "./App";

class Modeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: ""
    };
    this.timer = null;
  }

  getTime = () => {
    let today = new Date();
    let hours = today.getHours();
    let min = today.getMinutes();
    min = min === 0 ? "00" : min < 10 ? "0" + min : min;
    this.setState({ time: `${hours}:${min}` });
  };

  componentDidMount() {
    // get new time every 10 seconds
    this.getTime();
    this.timer = setTimeout(this.getTime, 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="emacs-footer">
        <div className="mode-line">
          <div className="mode-line-left">
            <div className="mode-line-indicator">
              <span />
            </div>
            <div className="mode-line-time">
              <span>{this.state.time}</span>
            </div>
            <div className="mode-line-filename">
              <span>{this.props.data.slice(1) + "<root>"}</span>
            </div>
            <div className="mode-line-copyright">
              <span>
                <span className="copyright-symbol">©</span> Andrew Jarrett{" "}
                {new Date().getFullYear()}
              </span>
            </div>
          </div>
          <div className="mode-line-right">
            <ThemeToggler />
          </div>
        </div>
        <div className="command-line">C-x</div>
      </div>
    );
  }
}

export default Modeline;
