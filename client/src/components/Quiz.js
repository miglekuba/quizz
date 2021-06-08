import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../App.css";

async function fetchQuiz(id) {
  const quizResponse = await fetch(
    "http://localhost:5000/quizzes/60bf2f0abf87990730431423"
  ).then((res) => res.json());
  console.log(quizResponse, "get quiz");
  return quizResponse;
}

function Quiz({ match }) {
  const [quiz, setQuiz] = useState({});
  const { id } = match.params;

  useEffect(() => {
    async function fetchData() {
      setQuiz(await fetchQuiz(id));
    }
    fetchData();
  }, [id]);
  return <p>{JSON.stringify(quiz)}</p>;
}

// On the home page i need to fetch  all quizzes (every quiz id)
// .map to a component which displays this link
// take quiz id and map the link component which has the id in "to" property(line 11)
// in quiz component need to make request to backend with axios or node fetch. To get
// the data

export default Quiz;
