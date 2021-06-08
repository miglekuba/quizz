import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function QuizCard(props) {
  return (
    <Link to={`/quizzes/${props.id}`}>
      <Box
        maxW="sm"
        borderWidth="4px"
        borderRadius="lg"
        overflow="hidden"
        color="black"
        bg="#E9D8FD"
        m="10px"
      >
        <Box
          p="10"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          <strong>{props.name}</strong>
        </Box>
      </Box>
    </Link>
  );
}
 export default QuizCard;