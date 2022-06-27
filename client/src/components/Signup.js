import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { toast } from "react-toastify";
import api from "../utils/axios";
import { addUserToLocalStorage } from "../utils/localStorage";
import FileBase from "react-file-base64";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    avatar: "",
  });

  const submitHandler = async () => {
    const { email, password, username, avatar } = values;

    if (!username || !email || !password) {
      toast.error("Please Provide All The Fields");

      return;
    }

    try {
      const { data } = await api.post("/api/v1/auth/register", {
        username,
        email,
        password,
        avatar,
      });

      toast.success(`Hi There! ${data.username} `);
      addUserToLocalStorage(data);

      navigate("/");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <VStack spacing="5px" fontFamily="Poppins">
      <FormControl id="first-name" isRequired>
        <FormLabel fontFamily="Poppins">username</FormLabel>
        <Input
          fontFamily="Poppins"
          placeholder="username"
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>email</FormLabel>
        <Input
          type="email"
          placeholder="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="password"
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload Pic</FormLabel>
        <FileBase
          type="file"
          label="Image"
          multiple={false}
          name="myFile"
          p={1.5}
          onDone={({ base64 }) => setValues({ ...values, avatar: base64 })}
        />
      </FormControl>
      <Button
        background="rgba(67, 43, 255, 0.8)"
        color="white"
        width="100%"
        _hover={{
          background: " rgba(67, 43, 255, 0.8)",
          color: "white",
          transform: "translate(0,-5px)",
        }}
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
