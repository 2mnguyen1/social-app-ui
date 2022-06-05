import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'

import "./profile.css"

export default function Profile() {
  return (
    <div>
        <Topbar />
        <div className="profile-container">
          <Sidebar />
          <div className="profile-right">
            <div className="profile-right-top">
                <div className="profile-cover">
                    <img src="assets/images/ads.jpg" alt="" className="profile-cover-image"/>
                    <img src="assets/images/hinh1.JPG" alt="" className="profile-user-image"/>
                </div>
                <div className="profile-info">
                    <h4 className="profile-username">Minh Nguyen</h4>
                    <span className="profile-description">Hello everybody!</span>
                </div>
            </div>
            <div className="profile-right-bot">
                <Feed />
                <Rightbar />
            </div>
          </div>
        </div>
    </div>
  )
}
