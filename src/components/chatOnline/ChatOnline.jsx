import "./chatOnline.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ChatOnline({ onlineUsers, currentID, setCurrentChat }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentID);
      setFriends(res.data);
    };
    getFriends();
  }, [currentID]);

  useEffect(() => {
    setOnlineFriends(
      friends.filter((friend) => onlineUsers.includes(friend._id))
    );
  }, [friends, onlineUsers]);

  async function handleClick(online) {
    try {
      const res = await axios.get(
        `/conversations/find/${online?._id}/${currentID}`
      );
      setCurrentChat(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="chat-online-component">
      {onlineFriends.map((online) => (
        <div className="chat-online-friend">
          <div
            className="chat-online-img-container"
            onClick={() => handleClick(online)}
          >
            <img
              src={
                online?.profilePicture
                  ? PF + online.profilePicture
                  : PF + "noAvata.jpg"
              }
              alt=""
              className="chat-online-img"
            />
            <div className="chat-online-badge"></div>
          </div>
          <span className="chat-online-name">{online?.username}</span>
        </div>
      ))}
    </div>
  );
}
