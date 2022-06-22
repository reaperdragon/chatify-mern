const getChat = async (req, res) => {
  res.send("Get Chat");
};

const getChats = async (req, res) => {
  res.send("Get All Chats");
};

const createGroup = async (req, res) => {
  res.send("Create Group Chat");
};

const renameGroup = async (req, res) => {
  res.send("Rename Group");
};

const removeFromGroup = async (req, res) => {
  res.send("Remove From Group");
};

const addUserToGroup = async (req, res) => {
  res.send("Add User To Group");
};

export {
  getChat,
  getChats,
  createGroup,
  removeFromGroup,
  renameGroup,
  addUserToGroup,
};
