import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/Homepage";
import Quiz from "./components/Quiz";
import Quizzes from "./components/allQuizzes";
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  return (
    <ChakraProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/quizzes" component={Quizzes}></Route>
        <Route exact path="/quizzes/:id" component={Quiz}></Route>
      </Switch>
    </Router>
    </ChakraProvider>
  );
}
export default App;
