import './rightbar.css'
import OnlineFriends from '../onlineFriends/OnlineFriends'
import {Users} from '../../dummyData'


export default function Rightbar({profile}) {
  const OnlineFriendsComponents = Users.map(user => {
    return <OnlineFriends
      key={user.id}
      user={user}
      />
  })
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  function RightbarHome() {
    return (
      <>
        <div className="birthday-container">
          <img className="birthday-image" alt="" src="assets/images/gift.png"/>
          <span className="birthday-text">
            <b>Minh Nguyen</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbar-ads" alt="" src="assets/images/ads.jpg"/>
        <h4 className="rightbar-title">Contacts</h4>
        {OnlineFriendsComponents}
      </>
    )
  }
  function RightbarProfile() {
    return (
      <div>
        <h4 className="rightbar-title">User information</h4>

        <div className="rightbar-info">
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">City: </span>
            <span className="rightbar-info-value">Hue</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">From: </span>
            <span className="rightbar-info-value">Vietnam</span>
          </div>
          <div className="rightbar-info-item">
            <span className="rightbar-info-key">Relationship: </span>
            <span className="rightbar-info-value">Single</span>
          </div>
        </div>

        <h4 className="rightbar-title">User friends</h4>
        <div className="rightbar-followings">
          <div className="rightbar-following">
            <img className="rightbar-following-image" src={`${PF}images/hinh1.JPG`} alt=""/>
            <span className="rightbar-following-name">Minh Nguyen</span>
          </div>
          <div className="rightbar-following">
            <img className="rightbar-following-image" src={`${PF}images/hinh1.JPG`} alt=""/>
            <span className="rightbar-following-name">Minh Nguyen</span>
          </div>
          <div className="rightbar-following">
            <img className="rightbar-following-image" src={`${PF}images/hinh1.JPG`} alt=""/>
            <span className="rightbar-following-name">Minh Nguyen</span>
          </div>
          <div className="rightbar-following">
            <img className="rightbar-following-image" src={`${PF}images/hinh1.JPG`} alt=""/>
            <span className="rightbar-following-name">Minh Nguyen</span>
          </div>
        </div>

      </div>
    )
  }
  return (
    <div className="rightbar-component">
      <div className="rightbar-wrapper">
      {profile ? <RightbarProfile /> : <RightbarHome />}
      </div>
    </div>
  )
}
