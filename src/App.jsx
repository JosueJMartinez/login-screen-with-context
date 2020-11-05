import React from "react";

import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import PageContent from "./components/PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";


function App() {
 
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PageContent>
          <NavBar />
          <LoginForm />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
