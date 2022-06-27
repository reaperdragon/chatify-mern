import React from "react";
import { Box } from "@chakra-ui/react";
import "./style.css";
import SingleChat from "./SingleChat";
import { useAppContext } from "../context/ChatProvider";

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = useAppContext();

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;
