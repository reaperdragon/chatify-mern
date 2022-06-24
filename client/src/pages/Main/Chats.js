import React from "react";

const Chats = ({ chats, isChatLoading }) => {
  console.log(chats);
  console.log(chats?.length);

  if (isChatLoading) {
    return <div>Please Wait For The Chat to Load</div>;
  }

  if (chats?.length === 0) {
    return <div>Please Search User for Start Conversation</div>;
  }

  return <div>Chats</div>;
};

export default Chats;
