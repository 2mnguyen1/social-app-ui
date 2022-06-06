import "./closeFriend.css"

export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
        <li className="friends-lists">
            <img className="friends-lists-image" src={PF + user.profilePictures} alt=""/>
            <span className="friends-lists-name">{user.username}</span>
        </li>
    </>
  )
}
