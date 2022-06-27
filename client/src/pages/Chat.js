import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/ChatProvider";
import { SideDrawer, MyChats, ChatBox } from "../components";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils/localStorage";

const Chat = () => {
  const { user } = useAppContext();
  const [fetchAgain, setFetchAgain] = useState(false);
  



  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chat;
