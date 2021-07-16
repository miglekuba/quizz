import React, { useState, useEffect } from "react";
import { Spinner, Box, Checkbox, Button, Input, Grid } from "@chakra-ui/react";

async function fetchQuiz(id) {
  const quizResponse = await fetch(`http://localhost:5000/quizzes/${id}`).then(
    (res) => res.json()
  );
  console.log(quizResponse, "get quiz");
  return quizResponse;
}

function EditQuiz({ match }) {
  const [quiz, setQuiz] = useState();
  const { id } = match.params;

  function handleQuizNameChange(event) {
    const newQuizName = event.target.value;
    setQuiz((currentQuiz) => {
      return {
        ...currentQuiz, // add a spread operator to create newCurrent quiz object
        name: newQuizName,
      };
    });
    console.log(quiz);
  }

  function handleQuestionChange(newQuestionTitle, questionIndex) {
    setQuiz((currentQuiz) => {
      currentQuiz.questionList[questionIndex].question = newQuestionTitle;
      return {
        ...currentQuiz,
      };
    });
    console.log(quiz);
  }
  function handleAnswerChange(newAnswerTitle, questionIndex, answerIndex) {
    setQuiz((currentQuiz) => {
      currentQuiz.questionList[questionIndex].answers[answerIndex].title =
        newAnswerTitle;
      return {
        ...currentQuiz,
      };
    });
    console.log(quiz);
  }

  function handleCorrectAnswerChange(newCorrectAnswer, questionIndex, answerIndex) {
    setQuiz((currentQuiz) => {
      currentQuiz.questionList[questionIndex].answers[answerIndex].isCorrect =
        newCorrectAnswer;
      return {
        ...currentQuiz,
      };
    });
    console.log(quiz);
  }

  function submitChanges() {
    const submitChangesResponse = fetch(
      `http://localhost:5000/quizzes/${id}/edit`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quiz),
      }
    );
    console.log(submitChangesResponse, "quiz updated");

    return submitChangesResponse;
  }

  useEffect(() => {
    async function fetchData() {
      setQuiz(await fetchQuiz(id));
    }
    fetchData();
  }, [id]);

  if (!quiz) {
    return <Spinner />;
  }
  return (
    <>
      <Grid className="form-container" templateColumns="repeat(1, 1fr)" gap={6}>
        <Grid className="form-container-quiz" templateColumns="repeat(1, 1fr)" gap={6}>
          <h1>Update Quiz Name:</h1>
          <Input
            size="md"
            bg="white"
            defaultValue={quiz.name}
            onChange={handleQuizNameChange}
          />
        </Grid>
        {quiz.questionList.map((q, qi) => (
          <Grid className="form-container-quiz" templateColumns="repeat(1, 1fr)" gap={3}>
            <h1>Update Question: </h1>
            <Input
              size="md"
              bg="white"
              defaultValue={q.question}
              onChange={(event) => handleQuestionChange(event.target.value, qi)}
            />

            <h1>Update Answers: </h1>
            {q.answers.map((a, ai) => (
              <Box>
                <Input
                  size="md"
                  bg="white"
                  defaultValue={a.title}
                  onChange={(event) =>
                    handleAnswerChange(event.target.value, qi, ai)

                  }
                >
                </Input>
                <Checkbox colorScheme="green" defaultIsChecked={a.isCorrect} onChange={(event) => handleCorrectAnswerChange(event.target.checked, qi, ai)}>This answer is correct</Checkbox>
              </Box>
            ))}
          </Grid>
        ))}
        <Grid className="btn" >
          <Button bg="#ECC94B" variant="outline" onClick={submitChanges}>
            Submit
        </Button>
        </Grid>
      </Grid>

    </>
  );
}

export default EditQuiz;

//in order to make changes editable quiz component need make a request to /quizzes/:id/edit which would be the entire quiz object(EditQuiz)
