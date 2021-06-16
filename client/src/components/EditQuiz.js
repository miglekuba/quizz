import React from "react";
import {Flex, Box, FormControl,FormLabel,Input,FormHelperText, ButtonGroup, useEditableControls, EditablePreview, IconButton,EditableInput, Editable } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { EditIcon,CheckIcon,CloseIcon } from "@chakra-ui/icons";

function EditQuiz() {
    function EditableControls() {
      const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
      } = useEditableControls()
  
      return isEditing ? (
        <ButtonGroup justifyContent="center" size="sm">
          <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
          <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
        </ButtonGroup>
      ) : (
        <Flex justifyContent="center">
          <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
        </Flex>
      )
    }
  
    return (
      <>
      <Editable>
      <Box>
      <FormControl id="question">
        <FormLabel>QUIZ</FormLabel>
        <Input type="question" />
        <FormHelperText>Change question title</FormHelperText>
      </FormControl>
      <FormControl id="Answer">
        <FormLabel>Answer 1</FormLabel>
        <Input type="answer" />
        <FormHelperText>Change quiz answer here</FormHelperText>
      </FormControl>
      <FormControl id="Answer">
        <FormLabel>Answer 2</FormLabel>
        <Input type="answer" />
        <FormHelperText>Change quiz answer here</FormHelperText>
      </FormControl>
      <FormControl id="Answer">
        <FormLabel>Answer 3</FormLabel>
        <Input type="answer" />
        <FormHelperText>Change quiz answer here</FormHelperText>
      </FormControl>
      </Box>
        <EditablePreview />
        <EditableInput />
        <EditableControls />
      </Editable>
      </>
    )
  }

  export default EditQuiz;
