import "./conversation.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUsers] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendID = conversation.members.find((m) => m !== currentUser._id);
    async function getFriend() {
      try {
        const res = await axios("/users?userID=" + friendID);
        setUsers(res.data);
      } catch (e) {
        console.log(e);
      }
    }
    getFriend();
  }, [currentUser, conversation]);

  return (
    <div className="conversation-container">
      <img
        className="conversation-img"
        src={
          user?.profilePicture ? PF + user.profilePicture : PF + "noAvata.jpg"
        }
        alt=""
      />
      <span className="conversation-name">{user ? user.username : "You are lonely!"}</span>
    </div>
  );
}
