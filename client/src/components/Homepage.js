import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import validator from "validator"
import { Button, Grid, Heading, Container, Box, Text, Input, GridItem } from "@chakra-ui/react";
import "../App.css";


function HomePage() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: false
  })
  console.log(values)

  const onChangeEmail = (event) => {
    const value = event.target.value;
    setValues((values) => {
      return {
        ...values,
        email: value,
      };
    });
  }

  const onChangePassword = (event) => {
    const value = event.target.value;
    setValues((values) => {
      return {
        ...values,
        password: value,
      };
    });
  }

  const email = (event) => {
    // console.log(event.target.value)
    const value = event.target.value;
    setValues((values) => {
      return {
        ...values,
        error: !validator.isEmail(value)
      }
    })
  };

  return (
    <Container bg="#5E8BFB" align="center" marginTop="300" borderRadius="lg" >
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={1}>
        <Box >
          <GridItem colSpan={2}>
            <Heading size="3xl" m="10">
              Welcome to the Quiz Manager!
            </Heading>
          </GridItem>
        </Box>
        <GridItem colSpan={3}>
          <Box bg="#5E8BFB" m="2">
            <Input
              value={values.email}
              onChange={onChangeEmail}
              maxW="180" mt="14"
              type="email" bg="white"
              placeholder="Enter your email"
              onBlur={email}
            >
            </Input>
            <Input
              value={values.password}
              onChange={onChangePassword}
              maxW="180" mt="6"
              type="password" bg="white"
              placeholder="Enter password">
            </Input>
            <Button className="btn" m="6" bg="#ECC94B">
              Log in
            </Button>
            <Box p="4">
              <Text>
                Don't have an account? <Link className="signupLink" to="/signup" >Sign up</Link>
              </Text>
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

export default HomePage;

// On the home page i need to fetch  all quizzes (every quiz id)
// .map to a component which displays this link
// take quiz id and map the link component which has the id in "to" property(line 11)
// in quiz component need to make request to backend with axios or node fetch. To get




  // const validatePassword = () => {
  //   let isValid = "true"
  //   if (typeof input["password"] !== "undefined") {
  //     if(input["password"].length < 6){
  //         isValid = false;
  //         errors["password"] = "Please add at least 6 charachter.";
  //     }
  //   }

  // const onSubmitChanges = (e) => {

  //   fecth  POST to Login 
  // } 