import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";

export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger-container">
        <div className="chat-menu">
          <div className="chat-menu-wrapper">
            <input placeholder="Search Messenger" className="chat-menu-input"/>
          </div>
        </div>
        <div className="chat-box">
          <div className="chat-box-wrapper">box</div>
        </div>
        <div className="chat-online">
          <div className="chat-online-wrapper">online</div>
        </div>
      </div>
    </>
  );
}
