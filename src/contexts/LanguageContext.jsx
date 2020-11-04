import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  state = { language: "spanish" };

  setLang = lang => {
    this.setState({ language: lang });
  };
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, setLang: this.setLang }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {context => <Component languageContext={context} {...props} />}
  </LanguageContext.Consumer>
);
