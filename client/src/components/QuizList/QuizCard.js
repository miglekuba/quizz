import React from "react";
import { Button, SimpleGrid, Box, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
// import EditQuiz from "./EditQuiz"

function QuizCard({ id, name, deleteQuiz }) {
  return (
    <Box
      bg="white"
      borderWidth="2px"
      m="20px"
      borderRadius="lg"
      minWidth="220px"
    >
      <Link to={`/quizzes/${id}`}>
        <SimpleGrid>
          <Button
            height="12vh"
            boxShadow="xl"
            size="lg"
            borderWidth="2px"
            borderRadius="lg"
            color="black"
            bg="#ECC94B"
            m="20px"
          >
            <strong>{name}</strong>
          </Button>
        </SimpleGrid>
      </Link>
      <SimpleGrid columns={5} spacing="5px" p="5px">
        <Link to={`/quizzes/${id}/edit`}>
          <IconButton size="sm" icon={<EditIcon />} />
        </Link>
        <IconButton
          size="sm" icon={<DeleteIcon />} onClick={() => {deleteQuiz(id)}}
        />
      </SimpleGrid>
    </Box>
  );
}
export default QuizCard;
