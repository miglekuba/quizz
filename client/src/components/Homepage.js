import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Heading, Container, Box, Text, Input, GridItem } from "@chakra-ui/react";
import "../App.css";
export default class HomePage extends Component {
  render() {
    return (
      <Container bg="#5E8BFB" align="center" marginTop="300" borderRadius="lg" >
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={1}>
          <Box>
            <GridItem colSpan={2}>
              <Heading size="3xl"  m="10">
                Welcome to the Quiz Manager!
              </Heading>
            </GridItem>
          </Box>
          <GridItem colSpan={3}>
            <Box bg="#5E8BFB" borderRadius="lg" m="2">
              <Input maxW="180" mt="14"
                type="text" bg="white"
                placeholder="Enter username"></Input>
              <Input maxW="180" mt="6"
                type="password" bg="white"
                placeholder="Enter password"></Input>
              <Link to="/quizzes">
                <Button className="btn" m="6" bg="#ECC94B">
                  Log in
                </Button>
              </Link>
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
}

// On the home page i need to fetch  all quizzes (every quiz id)
// .map to a component which displays this link
// take quiz id and map the link component which has the id in "to" property(line 11)
// in quiz component need to make request to backend with axios or node fetch. To get

