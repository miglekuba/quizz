import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Container, Box, Text, Input } from "@chakra-ui/react";
import "../App.css";
export default class HomePage extends Component {
  render() {
    return (

      <Container bg="#5E8BFB" p="50" marginTop="30vh" borderRadius="lg" >
        <Box alignItems="center" h="140">
          <Heading p="50" align="center" size="3xl">
            Quiz Manager
          </Heading>
        </Box>
        <Box align="center">
          <Text p="30" fontSize="xl">
            The best place to keep and manage your quizzes
          </Text>
          <Box>
          <Input maxW="20vh" m="1vh"
              type="text"
              placeholder="Enter username"></Input>
            <Input maxW="20vh"
              type="password"
              placeholder="Enter password"></Input>
            <Link to="/quizzes">
              <Button m="1vh" bg="#ECC94B" variant="outline">
                Login
            </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    );
  }
}

// On the home page i need to fetch  all quizzes (every quiz id)
// .map to a component which displays this link
// take quiz id and map the link component which has the id in "to" property(line 11)
// in quiz component need to make request to backend with axios or node fetch. To get

