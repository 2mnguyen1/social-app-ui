import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { io } from "socket.io-client";

import axios from "axios";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderID,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("sendUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.followings.filter((following) =>
          users.some((u) => u.userID === following)
        )
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getConversations();
  }, [user._id]);

  const currentConvStyles = {
    backgroundColor: currentChat ? "rgb(241, 241, 241)" : "",
  };

  const conversationComponents = conversations.map((con) => {
    return (
      <div onClick={() => setCurrentChat(con)} style={currentConvStyles}>
        <Conversation conversation={con} currentUser={user} key={con._id} />
      </div>
    );
  });

  useEffect(() => {
    const getMessage = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessage();
  }, [currentChat]);

  function ShowChats() {
    const [newMessages, setNewMessages] = useState("");
    function handleInput(e) {
      const { value } = e.target;
      setNewMessages(value);
    }
    async function handleSubmit(e) {
      e.preventDefault();
      const message = {
        sender: user._id,
        text: newMessages,
        conversationID: currentChat._id,
      };

      const recieverID = currentChat.members.find(
        (member) => member !== user._id
      );

      socket.current.emit("sendMessage", {
        senderID: user._id,
        recieverID,
        text: newMessages,
      });

      try {
        const res = await axios.post("/messages/", message);
        setMessages([...messages, res.data]);
      } catch (err) {
        console.log(err);
      }
    }
    useEffect(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    return (
      <div className="chat-box-wrapper">
        <div className="chat-box-top">
          {messages.map((m) => (
            <div ref={scrollRef}>
              <Message message={m} own={m.sender === user._id} key={m._id} />
            </div>
          ))}
        </div>
        <div className="chat-box-bottom">
          <input
            placeholder="Aa"
            className="chat-message-input"
            value={newMessages}
            onChange={handleInput}
          />
          <IconButton
            color="primary"
            size="small"
            className="chat-submit-button"
            onClick={handleSubmit}
            disabled={newMessages ? false : true}
          >
            <SendIcon />
          </IconButton>
        </div>
      </div>
    );
  }

  return (
    <>
      <Topbar />
      <div className="messenger-container">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            <input placeholder="Search Messenger" className="chat-menu-input" />
            {conversationComponents}
          </div>
        </div>
        <div className="chat-box">
          {currentChat ? (
            <ShowChats />
          ) : (
            <span className="no-conversation-text">Choose a conversation</span>
          )}
        </div>
        <div className="chat-online">
          <div className="chat-online-wrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentID={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
}
