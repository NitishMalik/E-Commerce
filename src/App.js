import React from "react";
import "./App.css";
import HomePage from "./pages/hompepage";
import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1> HATS </h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop/hats" component={HatsPage} />
    </Switch>
  );
}

export default App;
