import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Minh's MặtSách</span>
        </Link>
      </div>
      <div className="topbar-center">
        <div className="search-bar">
          <Search className="search-icon" />
          <input className="search-input" placeholder="Search MinhSocial" />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
          <span className="homepage">HomePage</span>
          <span className="timeline">Timeline</span>
        </div>
        <div className="topbar-icons">
          <div className="topbar-icons-items">
            <Person />
            <span className="icon-badge">1</span>
          </div>
          <div className="topbar-icons-items">
            <Link to="/messenger">
              <Chat/>
              <span className="icon-badge">1</span>
            </Link>
          </div>
          <div className="topbar-icons-items">
            <Notifications />
            <span className="icon-badge">1</span>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img
              className="topbar-img"
              alt=""
              src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "noAvata.jpg"
              }
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
