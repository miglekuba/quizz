import React from "react";
import {
  Flex,
  ButtonGroup,
  useEditableControls,
  Box,
  EditablePreview,
  IconButton,
  EditableInput,
  Editable,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";


function AddQuiz (){
// const [postData, setPostData] = useState({
// question:"", answer: "", quiz: ""
// })
// const handleQuestionChange = () =>{



    return(
<Box>
<FormControl id="question">
  <FormLabel>NEW QUIZ</FormLabel>
  <Input type="question" />
  <FormHelperText>Add quiz name here</FormHelperText>
</FormControl>
</Box>
    )
}


export default AddQuiz;