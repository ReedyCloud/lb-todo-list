import React from "react";

import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
