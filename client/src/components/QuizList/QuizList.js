import React, { useState, useEffect } from "react";
import QuizCard from "./QuizCard";
import { Flex } from "@chakra-ui/react";

async function fetchAllQuizzes(id) {
  const quizzesResponse = await fetch("http://localhost:5000/quizzes").then(
    (res) => res.json()
  );
  console.log(quizzesResponse, "get all quizzes");
  return quizzesResponse;
}


function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  async function deleteQuiz(id) {
    const deleteQuizResponse = await fetch(
      `http://localhost:5000/quizzes/${id}`,
      { method: "DELETE" }
    );
    console.log(deleteQuizResponse, "quiz deleted")
    setQuizzes(await fetchAllQuizzes())
    return deleteQuizResponse;
  }

  useEffect(() => {
    async function fetchData() {
      setQuizzes(await fetchAllQuizzes());
    }
    fetchData();
  }, []);
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      {quizzes.map((q) => (
        <QuizCard id={q._id} name={q.name} deleteQuiz={deleteQuiz} />
      ))}
    </Flex>
  );
}

export default QuizList;

// On the home page i need to fetch  all quizzes (every quiz id)
// .map to a component which displays this links
// take quiz id and map the link component which has the id in "to" property(line 11)
// in quiz component need to make request to backend with axios or node fetch. To get
// the data



//Editing

//1.Endpoint /add function
//2. Create Frontend/