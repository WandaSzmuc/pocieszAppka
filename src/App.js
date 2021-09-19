import React from "react";
import "./scss/main.scss";
import BeforeForm from "./components/BeforeForm";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <Menu />
      <Header />
      <BeforeForm />;
    </div>
  );
}

export default App;
