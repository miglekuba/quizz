import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// import "../App.css";

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
        {quiz &&
          quiz.questionList.map((q) => (
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box>
                    <p>{q.question}</p>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {q.answers.map((a) => (
                  <Box bg="#ECC94B" align="center" justify="center">
                  <Button m="20px">
                    <p>{a.title}</p>
                  </Button>
                  </Box>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
      </Accordion>
    </Flex>
  );
}

export default QuizView;
