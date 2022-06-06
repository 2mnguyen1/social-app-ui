import './onlineFriends.css'


export default function OnlineFriends({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
        <ul className="rightbar-friends-lists">
          <li className="rightbar-friend">
            <div className="online-friends-container">
              <img className="friend-online-image" alt="" src={PF + user.profilePictures} />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">{user.username}</span>
          </li>
        </ul>
    </div>
  )
}
