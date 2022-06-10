import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const description = useRef();
  const [file, setFile] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userID: user._id,
      description: description.current.value,
      image: ""
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;
      try {
        await axios.post("/upload", data);
      } catch (e) {
        console.log(e);
      }
    }
    try {
      await axios.post("/posts/posting", newPost);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="share-container">
      <div className="share-wrapper">
        <div className="share-top">
          <img
            className="share-image"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "noAvata.jpg"
            }
            alt=""
          />
          <input
            className="share-input"
            placeholder={`What's on your mind, ${user.username}?`}
            ref={description}
          ></input>
        </div>
        <form className="share-bottom" onSubmit={submitHandler}>
          <div className="share-options">
            <label htmlFor="file" className="share-option">
              <PermMedia htmlColor="tomato" className="share-icon" />
              <span className="share-text">Photo/Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.png"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="share-option">
              <Label htmlColor="blue" className="share-icon" />
              <span className="share-text">Tag</span>
            </div>
            <div className="share-option">
              <Room htmlColor="green" className="share-icon" />
              <span className="share-text">Location</span>
            </div>
            <div className="share-option">
              <EmojiEmotions htmlColor="goldenrod" className="share-icon" />
              <span className="share-text">Feelings</span>
            </div>
          </div>
          <button className="share-button" type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
