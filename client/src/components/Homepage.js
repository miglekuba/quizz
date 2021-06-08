import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../App.css";export default class HomePage extends Component {
  render() {
    return (
      <div className="main">
        <h1>Welcome to the Quiz Manager</h1>
        <Link to ='/quizzes/'>
        Quiz 1 
        </Link>
      </div>
    );
  }
}


// On the home page i need to fetch  all quizzes (every quiz id)
// .map to a component which displays this link 
// take quiz id and map the link component which has the id in "to" property(line 11)
// in quiz component need to make request to backend with axios or node fetch. To get
// the data 