import React from "react";
import styled from "styled-components";

const Chats = ({ chats, isChatLoading }) => {

  console.log(chats);

  if (isChatLoading) {
    return <div>Please Wait For The Chat to Load</div>;
  }

  if (chats?.length === 0) {
    return <div>Please Search User for Start Conversation</div>;
  }

  return (
    <Wrapper>
      {chats?.map((chat) => (
        <div key={chat._id}>
          {chat?.isGroupChat ? (
            <span>{chat.chatName}</span>
          ) : (
            <span>{chat?.users?.[1]?.username}</span>
          )}
        </div>
      ))}
    </Wrapper>
  );
};

export default Chats;

const Wrapper = styled.div``;
