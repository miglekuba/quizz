// import React, { useState, useEffect } from "react";


// function DeleteQuiz() {
//     const [quizzes, setQuizzes] = useState([])

//     async function deleteQuiz(id) {
//         const deleteQuizResponse = await fetch(
//             `http://localhost:5000/quizzes/${id}`, { credentials: 'include' },
//             { method: "DELETE" }
//         );
//         console.log(deleteQuizResponse, "quiz deleted")
//         setQuizzes(await fetchAllQuizzes())
//         return deleteQuizResponse;

//     }

//     useEffect(() => {
//         async function fetchData() {
//             setQuizzes(await fetchAllQuizzes());
//         }
//         fetchData();
//     }, []);


//     return (
//         { deleteQuiz }
//     )

// }

// export default DeleteQuiz