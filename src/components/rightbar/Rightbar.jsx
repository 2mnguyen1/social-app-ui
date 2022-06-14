import "./rightbar.css";
import OnlineFriends from "../onlineFriends/OnlineFriends";
import { Users } from "../../dummyData";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";

export default function Rightbar({ user }) {
  const OnlineFriendsComponents = Users.map((user) => {
    return <OnlineFriends key={user.id} user={user} />;
  });
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser, dispatch } = useContext(AuthContext);

  function RightbarHome() {
    return (
      <>
        <div className="birthday-container">
          <img className="birthday-image" alt="" src="assets/images/gift.png" />
          <span className="birthday-text">
            <b>Minh Nguyen</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbar-ads" alt="" src="assets/images/ads.jpg" />
        <h4 className="rightbar-title">Contacts</h4>
        {OnlineFriendsComponents}
      </>
    );
  }
  function RightbarProfile() {
    const [isFollow, setIsFollow] = useState(false);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
      async function getFriends() {
        try {
          const friendsList = await axios.get("/users/friends/" + user._id);
          setFriends(friendsList.data);
        } catch (e) {
          console.log(e);
        }
      }
      getFriends();
    }, [user._id]);

    useEffect(() => {
      setIsFollow(currentUser.followings.includes(user?._id));
    }, [currentUser, user?._id]);

    async function handleClick() {
      try {
        if (isFollow) {
          await axios.put(`/users/${user._id}/follow`, {
            userID: currentUser._id,
          });
          dispatch({
            type: "FOLLOW",
            payload: user.id,
          });
        } else {
          await axios.put(`/users/${user._id}/unfollow`, {
            userID: currentUser._id,
          });
          dispatch({
            type: "UNFOLLOW",
            payload: user.id,
          });
        }
      } catch (e) {
        console.log(e);
      }
      setIsFollow((prev) => !prev);
    }

    const friendsComponents = friends.map((friend) => {
      return (
        <>
          <Link
            to={`/profile/${friend.username}`}
            style={{ textDecoration: "none" }}
          >
            <div className="rightbar-following">
              <img
                className="rightbar-following-image"
                src={
                  friend.profilePicture
                    ? PF + friend.profilePicture
                    : PF + "noAvata.jpg"
                }
                alt=""
              />
              <span className="rightbar-following-name">{friend.username}</span>
            </div>
          </Link>
        </>
      );
    });
    return (
      <div>
        {user.username !== currentUser.username && (
          <button className="rightbar-follow-btn" onClick={handleClick}>
            {isFollow ? "Unfollow" : "Follow"}
            {isFollow ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className="rightbar-title">User information</h4>
        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City: </span>
            <span className="rightbar-info-value">{user.city}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From: </span>
            <span className="rightbar-info-value">{user.birdth}</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship: </span>
            <span className="rightbar-info-value">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "In a relationship"
                : "Complicated"}
            </span>
          </div>
        </div>

        <h4 className="rightbar-title">User friends</h4>
        <div className="rightbar-followings">{friendsComponents}</div>
      </div>
    );
  }
  return (
    <div className="rightbar-component">
      <div className="rightbar-wrapper">
        {user ? <RightbarProfile /> : <RightbarHome />}
      </div>
    </div>
  );
}
