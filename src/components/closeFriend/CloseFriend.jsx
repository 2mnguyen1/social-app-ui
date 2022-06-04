import "./closeFriend.css"

export default function CloseFriend({user}) {
  return (
    <>
        <li className="friends-lists">
            <img className="friends-lists-image" src={user.profilePictures} alt=""/>
            <span className="friends-lists-name">{user.username}</span>
        </li>
    </>
  )
}
