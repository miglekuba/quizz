import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { Button, Heading, Container, Box, Input } from "@chakra-ui/react";
import validator from "validator"
import "../App.css";

function SignUp() {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: false
    })

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


   const submitChanges = async ()=> {
        const submitChangesResponse = await fetch(
            `http://localhost:5000/signup`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
                credentials: 'include'
            }
        );
        console.log(submitChangesResponse, "user created");
        return submitChangesResponse;
    }


    return (
        <Container bg="#5E8BFB" p="10" marginTop="300" borderRadius="lg" >
            <Box alignItems="center" h="150">
                <Heading maxW="500" pt="3" m="3" align="center" size="3xl">
                    Sign up to the Quiz Manager
                </Heading>
            </Box>
            <Box align="center">
                <Input maxW="180" m="4"
                    type="text" bg="white"
                    placeholder="Enter username"
                    value={values.email}
                    onChange={onChangeEmail}
                    onBlur={validateEmail}></Input>
                <Input maxW="180"
                    type="password" bg="white"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={onChangePassword}
                >
                </Input>
            </Box>
            <Box align="center">
                <Link to="/signup">
                    <Button onClick={submitChanges}  variant="outline" m="1" bg="#ECC94B">
                        Sign Up
                    </Button>
                </Link>
            </Box>
        </Container>
    );
}
export default SignUp;