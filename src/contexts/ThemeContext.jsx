import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends Component {
  state = { isDarkMode: true };

  toggleIsDarkMode = () =>
    this.setState(prevState => ({ isDarkMode: !prevState.isDarkMode }));

  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleIsDarkMode: this.toggleIsDarkMode }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
