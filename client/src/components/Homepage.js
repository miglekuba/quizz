import React from "react";
import { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import validator from "validator"
import { Button, Grid, Heading, Container, Text, Input, GridItem } from "@chakra-ui/react";
import "../App.css";


function HomePage() {
  const history = useHistory();
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

  const validateEmail = (event) => {
    console.log(event.target.value)
    const value = event.target.value;
    setValues((values) => {
      return {
        ...values,
        error: !validator.isEmail(value)
      }
    })
  };

  async function makeLoginRequest() {
      const loginResponse = await fetch(
        `http://localhost:5000/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
          credentials: 'include'
        }
      );
      if (loginResponse.ok) {
        history.push("/quizzes")
      } 
      else {
        console.log(loginResponse, "log in failed");
      }
    }


  return (
    <form >
      <Container align="center" marginTop="300" borderRadius="lg" >
        <Grid h="100px" templateRows="repeat(3, 1fr)" gap={4}>
          <GridItem colSpan={4}  >
            <Heading size="3xl" m="4">
              Welcome to the Quiz Manager!
            </Heading>
          </GridItem>
          <GridItem colSpan={4}>
            <Input
              value={values.email}
              onChange={onChangeEmail}
              maxW="180" mt="10" ml="14"
              type="email" bg="white"
              placeholder="Enter your email"
              onBlur={validateEmail}
            >
            </Input>
            <Input
              value={values.password}
              onChange={onChangePassword}
              maxW="180" ml="4"
              type="password" bg="white"
              placeholder="Enter password"
            >
            </Input>
            <Button onClick={makeLoginRequest} className="btn" m="6" bg="#ECC94B">
              Log in
            </Button>
          </GridItem>
          <GridItem colSpan={4}>
            <Text>
              Don't have an account?
            </Text>
            <Link className="signupLink" to="/signup" >Sign up</Link>
          </GridItem>
        </Grid>
      </Container>
    </form>
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