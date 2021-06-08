import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "../App.css";
export default class HomePage extends Component {
  render() {
    return (
      <>
        <Flex height="20vh" alignItems="center" justifyContent="center">
          <h1>Welcome to QU2</h1>
        </Flex>
        <Flex height="50vh" alignItems="center" justifyContent="center">
          <Link to="/quizzes">
            <Button colorScheme="teal" variant="outline">
              View all Quizzes
            </Button>
          </Link>
        </Flex>
      </>
    );
  }
}

// On the home page i need to fetch  all quizzes (every quiz id)
// .map to a component which displays this link
// take quiz id and map the link component which has the id in "to" property(line 11)
// in quiz component need to make request to backend with axios or node fetch. To get
// the data
