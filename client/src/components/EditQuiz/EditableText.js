import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Spacer,
} from "@chakra-ui/react";

function EditableText({ initialValue, onSubmit }) {
  return (
    <Box>
      <FormControl fontSize="1xl" onSubmit={onSubmit} isRequired>
        <Input defaultValue={initialValue} />
      </FormControl>
    </Box>
  );
}
export default EditableText;
