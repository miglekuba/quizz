import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/Homepage";
import Quiz from "./components/Quiz";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/quizzes/:id" component={Quiz}></Route>
      </Switch>
    </Router>
  );
}
export default App;
