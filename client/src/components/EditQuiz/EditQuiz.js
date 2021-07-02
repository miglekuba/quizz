import React, { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

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


function handleQuizNameChange(event){

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
    <form>
      <h1>Update Quiz Name:</h1>
      <div>
        <input size="40" defaultValue={quiz.name} onChange={handleQuizNameChange} />
      </div>
      <h1>Update Question: </h1>
      {quiz.questionList.map((q, i) => (
          <div>
            <input size="40" defaultValue={q.question} />
          </div>
        ))}
      <input type="submit" />
    </form>
  );
}

export default EditQuiz;

//in order to make changes editable quiz component need make a request to /quizzes/:id/edit which would be the entire quiz object(EditQuiz)
