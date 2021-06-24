import React from "react";
import {
  Flex,
  Box,
  ButtonGroup,
  useEditableControls,
  EditablePreview,
  IconButton,
  EditableInput,
  Editable,
  Spacer,
} from "@chakra-ui/react";

import { EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";

function EditableText({initialValue}) {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  }

  return (
    <Box
      bg="white"
      borderWidth="2px"
      m="20px"
      borderRadius="lg"
      minWidth="10px"
      p="2px"
    >
      <Editable
        defaultValue={initialValue}
        fontSize="1xl"
        onSubmit={console.log}
      >
        <Flex>
          <EditablePreview />
          <EditableInput />
          <Spacer />
          <EditableControls />
        </Flex>
      </Editable>
    </Box>
  );
}
export default EditableText;
