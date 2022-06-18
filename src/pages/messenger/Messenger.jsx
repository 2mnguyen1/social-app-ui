import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";

export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger-container">
        <div className="chat-menu"></div>
        <div className="chat-box"></div>
        <div className="chat-online"></div>
      </div>
    </>
  );
}
