import React, { Component } from "react";
import axios from "axios";
import { AST } from "@ahrjarrett/org-mode";
import Modeline from "./Modeline";
import { GlobalStyles } from "./styles/theme/Global.styles";
import { AppStyles } from "./styles/App.styles.js";
import { themes } from "./styles/theme/themes";

const ThemeContext = React.createContext();

class ThemeProvider extends Component {
  constructor(props) {
    super(props);
    const theme = localStorage.getItem("theme") || "leuven";
    localStorage.setItem("theme", theme);
    this.state = {
      theme,
      toggleTheme: this.toggleTheme
    };
  }

  toggleTheme = e => {
    e.preventDefault();
    const theme = this.state.theme === "leuven" ? "spacemacs" : "leuven";
    localStorage.setItem("theme", theme);
    this.setState({
      theme
    });
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const ThemeToggler = () => (
  <ThemeContext.Consumer>
    {({ toggleTheme }) => (
      <div className="theme-toggler">
        <a href="/" onClick={toggleTheme}>
          Toggle theme
        </a>
      </div>
    )}
  </ThemeContext.Consumer>
);

class App extends Component {
  state = {
    content: ""
  };

  async componentDidMount() {
    const { data } = await axios.get(this.props.data);
    this.setState({ content: data });
  }

  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme, toggleTheme }) => (
            <AppStyles className="AppStyles" theme={themes[theme]}>
              <GlobalStyles />
              <h1 id="andrew-jarrett" style={{ display: "none" }}>
                I’m Andrew Jarrett
              </h1>
              <div className="orgmode-wrapper">
                {this.state.content && (
                  <AST orgfile={this.state.content} theme={themes[theme]} />
                )}
                {/* <div className="footer">
                  <ThemeToggler />
                  <div className="home-copyright">
                    <span className="copyright-symbol">©</span> Andrew Jarrett{" "}
                    {new Date().getFullYear()}
                  </div>
                </div> */}
                <Modeline data={this.props.data} />
              </div>
            </AppStyles>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
