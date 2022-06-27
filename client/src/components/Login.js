import React, { useState } from "react";
import { toast } from "react-toastify";

import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import api from "../utils/axios";
import { addUserToLocalStorage } from "../utils/localStorage";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [values, setValues] = useState({
    email: "",
    password: "",
    loading: false,
  });

  const navigate = useNavigate();

  const submitHandler = async () => {
    setValues({ ...values, loading: true });
    const { email, password } = values;
    if (!email || !password) {
      toast.error("Please Fill All the Fields");
      setValues({ ...values, loading: false });
      return;
    }
    try {
      const { data } = await api.post("/api/v1/auth/login", {
        email,
        password,
      });

      toast.success(`Welcome Back! ${data.username}`);
      addUserToLocalStorage(data);
      setValues({ ...values, loading: false });
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.msg);
      setValues({ ...values, loading: false });
    }
  };

  return (
    <VStack spacing="10px" fontFamily="Poppins">
      <FormControl id="email" isRequired>
        <FormLabel>email</FormLabel>
        <Input
          value={values.email}
          type="email"
          placeholder="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>password</FormLabel>
        <InputGroup size="md">
          <Input
            value={values.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
            type={show ? "text" : "password"}
            placeholder="password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        background="rgba(67, 43, 255, 0.8)"
        width="100%"
        color="white"
        _hover={{
          background: " rgba(67, 43, 255, 0.8)",
          color: "white",
          transform: "translate(0,-5px)",
        }}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={values.loading}
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        _hover={{
          background: " red",
          color: "white",
          transform: "translate(0,-5px)",
        }}
        onClick={() => {
          setValues({ email: "test@gmail.com", password: "t1s25!96" });
        }}
      >
        Login For Test
      </Button>
    </VStack>
  );
};

export default Login;
