import './rightbar.css'

export default function Rightbar() {
  return (
    <div className="rightbar-component">
      <div className="rightbar-wrapper">
        <div className="birthday-container">
          <div className="birthday-image"></div>
          <span className="birthday-text">
            <b>Minh Nguyen</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <div className="rightbar-ads"></div>
        <h4 className="rightbar-title">Contacts</h4>
        <ul className="rightbar-friends-lists">
          <li className="rightbar-friend">
            <div className="friend-online-image">
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Minh Nguyen</span>
          </li>
        </ul>
        <ul className="rightbar-friends-lists">
          <li className="rightbar-friend">
            <div className="friend-online-image">
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Minh Le</span>
          </li>
        </ul>
        <ul className="rightbar-friends-lists">
          <li className="rightbar-friend">
            <div className="friend-online-image">
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Minh Pham</span>
          </li>
        </ul>
        <ul className="rightbar-friends-lists">
          <li className="rightbar-friend">
            <div className="friend-online-image">
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-username">Minh Ho</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
