import './rightbar.css'
import OnlineFriends from '../onlineFriends/OnlineFriends'
import {Users} from '../../dummyData'


export default function Rightbar() {
  const OnlineFriendsComponents = Users.map(user => {
    return <OnlineFriends
      key={user.id}
      user={user}
      />
  })
  return (
    <div className="rightbar-component">
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <img className="birthday-image" alt="" src="assets/images/gift.png"/>
          <span className="birthday-text">
            <b>Minh Nguyen</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbar-ads" alt="" src="assets/images/ads.jpg"/>
        <h4 className="rightbar-title">Contacts</h4>
        {OnlineFriendsComponents}
      </div>
    </div>
  )
}
