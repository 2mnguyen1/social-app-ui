import './rightbar.css'

export default function Rightbar() {
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
        <ul className="rightbar-friends-lists">
          <li className="rightbar-friend">
            <div className="online-friends-container">
              <img className="friend-online-image" alt="" src="assets/images/hinh1.JPG"/>
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Minh Nguyen</span>
          </li>
        </ul>
        <ul className="rightbar-friends-lists">
          <li className="rightbar-friend">
            <div className="online-friends-container">
              <img className="friend-online-image" alt="" src="assets/images/hinh2.JPG"/>
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Minh Le</span>
          </li>
        </ul>
        <ul className="rightbar-friends-lists">
          <li className="rightbar-friend">
            <div className="online-friends-container">
              <img className="friend-online-image" alt="" src="assets/images/hinh3.png"/>
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Minh Pham</span>
          </li>
        </ul>
        <ul className="rightbar-friends-lists">
          <li className="rightbar-friend">
            <div className="online-friends-container">
              <img className="friend-online-image" alt="" src="assets/images/hinh4.png"/>
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Minh Ho</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
