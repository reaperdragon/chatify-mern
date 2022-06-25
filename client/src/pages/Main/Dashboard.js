import React, { useEffect } from "react";

import styled from "styled-components";
import Chats from "./Chats";
import Message from "./Message";

import { useDispatch, useSelector } from "react-redux";
import { getAllChats } from "../../features/chat/chatSlice";

const Dashboard = () => {
  const { chats, isChatLoading } = useSelector((state) => state.chat);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllChats());
  }, [dispatch]);

  console.log(chats[0]);

  return (
    <Wrapper>
      <ContentWrapper>
        <div className="container">
          <Chats chats={chats[0]} isChatLoading={isChatLoading} />
          <Message />
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  height: 100vh;
`;

const ContentWrapper = styled.div`
  .container {
    max-width: 1234px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(minmax(360px), auto);
    height: 100%;
  }
`;
