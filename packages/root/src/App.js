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
              {this.state.content && <AST orgfile={this.state.content} />}
              <div className="theme-wrapper">
                {/* <org.Outline theme={theme}>
                  <div className="home-wrapper">
                    <br />

                    <org.HL level={1} headline="I’m Andrew Jarrett">
                      <br />

                      <org.HL
                        level={2}
                        headline={
                          <>
                            I am a Production Team Lead at{" "}
                            <a
                              href="https://ownlocal.com"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              OwnLocal
                            </a>{" "}
                            and a lover of all things functional programming.
                            <br />
                          </>
                        }
                      >
                        <br />
                        <p>- Emacs is pretty cool</p>
                        <p>
                          - Currently I’m reading{" "}
                          <a
                            href="https://www.amazon.com/Mock-Mockingbird-Raymond-Smullyan/dp/0192801422"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            To Mock a Mockingbird
                          </a>
                        </p>
                        <br />
                      </org.HL>

                      <org.HL
                        level={2}
                        headline={
                          <>
                            I went to undergrad at Northwestern University’s{" "}
                            <a
                              href="https://www.weinberg.northwestern.edu/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              Weinberg College of Arts & Sciences
                            </a>
                            .
                          </>
                        }
                      />
                      <br />

                      <org.HL level={2} headline="About me">
                        <br />
                        <org.Src lang="Description:">
                          I grew up in Denver and now live in Austin, Texas. My
                          dog is named Ash and he’s cute as hell but also a
                          tortured soul.
                        </org.Src>
                      </org.HL>
                      <br />
                      <br />

                      <org.HL level={2} headline="Hire me">
                        <br />
                        <p>
                          - Here's a link to my{" "}
                          <a
                            tabIndex="1"
                            className="error home-resume-link"
                            href="https://thegrepper.com/resume"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            resume
                          </a>
                        </p>
                        <br />
                        <org.HL level={3} headline="Contact info">
                          <br />
                          <p>
                            -{" "}
                            <a href="mailto:ahrjarrett@gmail.com">
                              ahrjarrett@gmail.com
                            </a>
                          </p>
                          <p>
                            -{" "}
                            <a
                              href="https://github.com/ahrjarrett/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              GitHub
                            </a>
                          </p>
                          <p>
                            -{" "}
                            <a
                              href="https://www.linkedin.com/in/andrewhjarrett/"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              LinkedIn
                            </a>
                          </p>
                        </org.HL>

                        <br />
                        <li className="org-bullet-3">Other cool stuff</li>
                        <br />
                        <ThemeToggler />
                        <p>
                          2.{" "}
                          <a href="https://blog.thegrepper.com/">
                            Perfunctory blog
                          </a>
                        </p>
                        <p>
                          3.{" "}
                          <a
                            href="https://github.com/fniessen/emacs-leuven-theme"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Leuven
                          </a>
                          , the Emacs theme this page is based on
                        </p>
                        <p>
                          4.{" "}
                          <a
                            href="https://github.com/ahrjarrett/.emacs.d/"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            My Emacs config
                          </a>
                        </p>
                        <p>
                          5.{" "}
                          <a
                            href="http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Functors, Applicatives, And Monads In Pictures
                          </a>
                        </p>
                        <br />
                        <br />
                      </org.HL>
                    </org.HL>

                    <div className="home-copyright">
                      <span className="copyright-symbol">©</span> Andrew Jarrett{" "}
                      {1900 + new Date().getYear()}
                    </div>
                  </div>
                </org.Outline> */}
              </div>
            </AppStyles>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
