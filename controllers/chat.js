import { StatusCodes } from "http-status-codes";
import Chat from "../models/chat.js";
import User from "../models/user.js";

import {
  BadRequestError,
} from "../errors/index.js";

const getChat = async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.send("No User Exists!");
  }

  let chat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user.id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  chat = await User.populate(chat, {
    path: "latestMessage.sender",
    select: "username avatar email fullName _id",
  });

  if (chat.length > 0) {
    res.send(chat[0]);
  } else {
    const createChat = await Chat.create({
      chatName: "sender",
      isGroupChat: false,
      users: [req.user.id, userId],
    });

    const fullChat = await Chat.findOne({ _id: createChat._id }).populate(
      "users",
      "-password"
    );

    res.status(StatusCodes.OK).json(fullChat);
  }
};

const getChats = async (req, res) => {
  const chat = await Chat.find({ users: { $elemMatch: { $eq: req.user.id } } })
    .populate("users", "-password")
    .populate("groupAdmin", "-password")
    .populate("latestMessage")
    .sort({ updatedAt: -1 });

  const user = await User.populate(chat, {
    path: "latestMessage.sender",
    select: "username avatar email fullName _id",
  });

  res.status(StatusCodes.OK).json(user);
};

const createGroup = async (req, res) => {
  if (!req.body.users || !req.body.name) {
    return res.status(400).send({ message: "Please Fill all the feilds" });
  }

  var users = JSON.parse(req.body.users);

  if (users.length < 2) {
    return res
      .status(400)
      .send("More than 2 users are required to form a group chat");
  }

  users.push(req.user.id);

  const groupChat = await Chat.create({
    chatName: req.body.name,
    users: users,
    isGroupChat: true,
    groupAdmin: req.user.id,
  });

  const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  res.status(200).json(fullGroupChat);
};

const renameGroup = async (req, res) => {
  const { chatId, chatName } = req.body;

  const updateChat = await Chat.findByIdAndUpdate(
    chatId,
    {
      chatName: chatName,
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!updateChat) {
    throw new BadRequestError("Chat Not Found");
  } else {
    res.json(updateChat);
  }
};

const addUserToGroup = async (req, res) => {
  const { chatId, userId } = req.body;

  const addUser = await Chat.findByIdAndUpdate(
    chatId,
    {
      $push: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!addUser) {
    throw new BadRequestError("Chat Not Found");
  } else {
    res.status(StatusCodes.OK).json(addUser);
  }
};

const removeFromGroup = async (req, res) => {
  const { chatId, userId } = req.body;

  const removeUser = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!removeUser) {
    throw new BadRequestError("Chat Not Found");
  } else {
    res.status(StatusCodes.OK).json(removeUser);
  }
};

export {
  getChat,
  getChats,
  createGroup,
  removeFromGroup,
  renameGroup,
  addUserToGroup,
};
