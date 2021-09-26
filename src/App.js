import React, { useState } from "react";
import "./scss/main.scss";
import BeforeForm from "./components/BeforeForm";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Diary from "./components/Diary";
import AfterForm from "./components/AfterForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [id, setId] = useState(null);
  return (
    <Router>
      <Menu />
      <Header />
      <Switch>
        <Route exact path="/">
          <BeforeForm setId={setId} />
        </Route>
        <Route path="/after">
          <AfterForm id={id} />
        </Route>
        <Route path="/diary">
          <Diary />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
