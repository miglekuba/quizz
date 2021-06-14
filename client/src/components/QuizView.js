import React, { useState, useEffect } from "react";
import {
  Flex,
  Accordion,
} from "@chakra-ui/react";
import Question from "./Question";


async function fetchQuiz(id) {
  const quizResponse = await fetch(`http://localhost:5000/quizzes/${id}`).then(
    (res) => res.json()
  );
  console.log(quizResponse, "get quiz");
  return quizResponse;
}


function QuizView({ match }) {
  const [quiz, setQuiz] = useState();
  const { id } = match.params;

  useEffect(() => {
    async function fetchData() {
      setQuiz(await fetchQuiz(id));
    }
    fetchData();
  }, [id]);


  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Accordion allowMultiple w="400px">
        {quiz && quiz.questionList.map((q) => (
           <Question data={q}/> 
          ))}
      </Accordion>
    </Flex>
  );
}

export default QuizView;
