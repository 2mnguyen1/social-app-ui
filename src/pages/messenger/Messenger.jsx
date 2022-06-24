import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const { user } = useContext(AuthContext);

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

  const conversationComponents = conversations.map((con) => {
    return (
      <div onClick={() => setCurrentChat(con)}>
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
    return (
      <div className="chat-box-wrapper">
        <div className="chat-box-top">
          {messages.map((m) => (
            <Message message={m} own={m.sender === user._id} />
          ))}
        </div>
        <div className="chat-box-bottom">
          <textarea placeholder="Aa" className="chat-message-input"></textarea>
          <button className="chat-submit-button">Send</button>
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
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
