import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/Homepage";
import PlayQuiz from "./components/PlayQuiz/PlayQuiz";
import QuizList from "./components/QuizList/QuizList";
import EditQuiz from "./components/EditQuiz/EditQuiz";
// import EditQuestion from "./components/EditQuestion";

import { ChakraProvider } from "@chakra-ui/react"



function App() {
  return (
    <ChakraProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/quizzes" component={QuizList}></Route>
        <Route exact path="/quizzes/:id" component={PlayQuiz}></Route>
        <Route exact path="/quizzes/:id/edit" component={EditQuiz}></Route>
        {/* <Route exact path="/quizzes/:id/questions/:questionId/edit" component={EditQuestion}></Route> */}
      </Switch>
    </Router>
    </ChakraProvider>
  );
}
export default App;
