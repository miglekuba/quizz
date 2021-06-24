import React, { useState } from "react";

import {
  Box,
  Button,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const ANSWER_STATES = {
  CORRECT: "#52b788",
  INCORRECT: "#f94144",
  UNANSWERED: "#5E8BFB",
};

function Question({ data }) {
  const [answerState, setAnswerState] = useState(ANSWER_STATES.UNANSWERED);

  function handleClick(a, e) {
    console.log(a, "this is the answer");
    if (a.isCorrect) {
      return setAnswerState(ANSWER_STATES.CORRECT);
    } else {
      setAnswerState(ANSWER_STATES.INCORRECT);
    }
  }

  return (
    <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box>
                    <p>{data.question}</p>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {data.answers.map((a) => (
                  <Box bg={answerState} align="center" justify="center">
                  <Button onClick={(e)=>handleClick(a,e)} m="20px" bg="#ECC94B">
                    <p>{a.title}</p>
                  </Button>
                  </Box>
                ))}
              </AccordionPanel>
            </AccordionItem>
  );
}
export default Question;
