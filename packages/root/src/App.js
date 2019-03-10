import React, { Component } from "react";
import axios from "axios";
import { AST, org } from "@ahrjarrett/org-mode";
import { GlobalStyles } from "./styles/theme/Global.styles";
import { AppStyles } from "./styles/App.styles.js";

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

const ThemeToggler = () => (
  <ThemeContext.Consumer>
    {({ toggleTheme, theme }) => (
      <p>
        1.{" "}
        <a href="/" onClick={toggleTheme}>
          Toggle light/dark theme
        </a>
      </p>
    )}
  </ThemeContext.Consumer>
);

class App extends Component {
  state = {
    content: ""
  };

  async componentDidMount() {
    const { data } = await axios.get("/home.org");
    this.setState({ content: data });
  }

  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <AppStyles>
              <GlobalStyles />
              <h1 id="andrew-jarrett" style={{ display: "none" }}>
                I’m Andrew Jarrett
              </h1>
              {this.state.content && (
                <AST orgfile={this.state.content} theme={theme} />
              )}
            </AppStyles>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
