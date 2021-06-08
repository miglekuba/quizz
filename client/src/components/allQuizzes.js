import React, { useState, useEffect } from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

async function fetchAllQuizzes(id) {
  const quizzesResponse = await fetch("http://localhost:5000/quizzes").then(
    (res) => res.json()
  );
  console.log(quizzesResponse, "get all quizzes");
  return quizzesResponse;
}

function Quizzes({ match }) {
  const [quizzes, setQuizzes] = useState({});
  const { id } = match.params;

  useEffect(() => {
    async function fetchData() {
      setQuizzes(await fetchAllQuizzes(id));
    }
    fetchData();
  }, [id]);
  return (
    <Link to="/quizzes/60bf5abbdf37c45239f4e39d">
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        color="black"
        bg="yellow"
      >
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Oceanology
        </Box>
        <Image src="/images/ocean.jpg" />
      </Box>
    </Link>
  );
}

export default Quizzes;

// On the home page i need to fetch  all quizzes (every quiz id)
// .map to a component which displays this links
// take quiz id and map the link component which has the id in "to" property(line 11)
// in quiz component need to make request to backend with axios or node fetch. To get
// the data
