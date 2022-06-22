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

  const conversationComponents = conversations.map(con => {
    return <Conversation conversation={con} currentUser={user} key={con._id} />
  })


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
          <div className="chat-box-wrapper">
            <div className="chat-box-top">
              <Message />
              <Message own />
              <Message />
              <Message own />
              <Message />
              <Message own />
              <Message />
              <Message own />
              <Message />
            </div>
            <div className="chat-box-bottom">
              <textarea
                placeholder="Aa"
                className="chat-message-input"
              ></textarea>
              <button className="chat-submit-button">Send</button>
            </div>
          </div>
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
