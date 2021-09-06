import React from "react";
import { Link } from "react-router-dom";
import { Button, Heading, Container, Box, Input } from "@chakra-ui/react";
import "../App.css";

function SignUp()  {
        return (
            <Container bg="#5E8BFB" p="10" marginTop="300" borderRadius="lg" >
                <Box alignItems="center" h="150">
                    <Heading  maxW="500"  pt="3" m="3" align="center" size="3xl">
                        Sign up to the Quiz Manager
                    </Heading>
                </Box>
                <Box align="center">
                    <Input maxW="180" m="4"
                        type="text" bg="white"
                        placeholder="Enter username"></Input>
                    <Input maxW="180"
                        type="password" bg="white"
                        placeholder="Enter password"></Input>
                </Box>
                <Box align="center">
                    <Link to="/signup">
                        <Button variant="outline" m="1" bg="#ECC94B">
                            Sign Up
                        </Button>
                    </Link>
                    </Box>
            </Container>
        );
}
export default SignUp;