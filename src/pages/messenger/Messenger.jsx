import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";

export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger-container">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            <input placeholder="Search Messenger" className="chat-menu-input" />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
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
            
          </div>
        </div>
      </div>
    </>
  );
}
