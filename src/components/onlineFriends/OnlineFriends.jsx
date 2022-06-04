import './onlineFriends.css'


export default function OnlineFriends({user}) {
  return (
    <div>
        <ul className="rightbar-friends-lists">
          <li className="rightbar-friend">
            <div className="online-friends-container">
              <img className="friend-online-image" alt="" src={user.profilePictures} />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">{user.username}</span>
          </li>
        </ul>
    </div>
  )
}
