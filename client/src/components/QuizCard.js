import React from "react";
import { Button, Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function QuizCard(props) {
  return (
    <Link to={`/quizzes/${props.id}`}>
      <SimpleGrid minChildWidth="220px" spacing="20px">
        <Button
          height="30vh"
          boxShadow="xl"
          size="lg"
          borderWidth="2px"
          borderRadius="lg"
          color="black"
          bg="#ECC94B"
          m="20px"
        >
          <strong>{props.name}</strong>
        </Button>
      </SimpleGrid>
    </Link>
  );
}
export default QuizCard;
