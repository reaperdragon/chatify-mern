import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Chats = ({ chats, isChatLoading }) => {
  const { user } = useSelector((state) => state.user);

  let activeStyle = {
    color: "#2E5CFF",
  };

  if (isChatLoading) {
    return <div>Please Wait For The Chat to Load</div>;
  }

  if (chats?.length === 0) {
    return <div>Please Search User for Start Conversation</div>;
  }

  return (
    <Wrapper>
      {chats?.map((chat) => (
        <NavLink
          to={`/message/${chat?._id}`}
          key={chat?._id}
          className="chat_name__container"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          {chat?.isGroupChat ? (
            <span className="chat_name">{chat?.chatName}</span>
          ) : (
            <span className="chat_name">
              {chat?.users?.map((u) =>
                u?._id !== user?._id ? u?.username : null
              )}
            </span>
          )}
        </NavLink>
      ))}
    </Wrapper>
  );
};

export default Chats;

const Wrapper = styled.div`
  height: 85vh;
  overflow-y: scroll;

  .chat_name__container {
    width: 360px;
    display: flex;
    align-items: center;

    background: #f2f2f2;
    font-family: "Poppins", sans-serif;
    text-decoration: none;
    color: black;
    border-radius: 5px;

    margin: 10px 0;
    padding: 10px;
  }
`;
