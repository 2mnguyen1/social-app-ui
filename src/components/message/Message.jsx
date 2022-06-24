import "./message.css";
import {format} from 'timeago.js'

export default function Message({ own, message }) {
  return (
    <div className={own ? "message-container own" : "message-container"}>
      <div className="message-top">
        <img src="" alt="" className="message-img" />
        <p className="message-text">{message.text}</p>
      </div>
      <div className="message-bottom">{format(message.createdAt)}</div>
    </div>
  );
}
