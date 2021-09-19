import React from "react";
import "./scss/main.scss";
import BeforeForm from "./components/BeforeForm";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Diary from "./components/Diary";
import AfterForm from "./components/AfterForm";

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <Diary />;
    </div>
  );
}

export default App;
