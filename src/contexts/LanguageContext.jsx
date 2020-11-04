import React, { Component, createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  state = { language: "french" };
  setLang = lang => {
    console.log(lang);
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
