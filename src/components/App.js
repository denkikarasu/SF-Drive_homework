import React from "react";
import {
    BrowserRouter as Router,
  } from "react-router-dom";

// import '../css/styles.css';

// Временное решение для обхода проблемы со сборкой файла css
// import '../css/temp_fonts.css';
import '../css/temp_styles.css';

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <Router>
        <Header />
        <Main />
        <Footer />
    </Router>
  );
}

export default App;