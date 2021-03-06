import './sidebar.css'
import { RssFeed, Chat, OndemandVideo, Group, Bookmarks, Help, Work ,Event, School, KeyboardArrowDown } from '@mui/icons-material';
import CloseFriend from '../closeFriend/CloseFriend'
import {Users} from '../../dummyData'

export default function Sidebar() {
  const closeFriendComponents = Users.map(user => {
    return <CloseFriend
      key={user.id}
      user={user}
    />
  })
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <ul className="sidebar-lists">
          <li className="sidebar-lists-items">
            <RssFeed className="sidebar-icon"/>
            <span className="lists-items-info">Feeds</span>
          </li>
          <li className="sidebar-lists-items">
            <Chat className="sidebar-icon"/>
            <span className="lists-items-info">Chats</span>
          </li>
          <li className="sidebar-lists-items">
            <OndemandVideo className="sidebar-icon"/>
            <span className="lists-items-info">Videos</span>
          </li>
          <li className="sidebar-lists-items">
            <Group className="sidebar-icon"/>
            <span className="lists-items-info">Groups</span>
          </li>
          <li className="sidebar-lists-items">
            <Bookmarks className="sidebar-icon"/>
            <span className="lists-items-info">Bookmarks</span>
          </li>
          <li className="sidebar-lists-items">
            <Help className="sidebar-icon"/>
            <span className="lists-items-info">Questions</span>
          </li>
          <li className="sidebar-lists-items">
            <Work className="sidebar-icon"/>
            <span className="lists-items-info">Jobs</span>
          </li>
          <li className="sidebar-lists-items">
            <Event className="sidebar-icon"/>
            <span className="lists-items-info">Evens</span>
          </li>
          <li className="sidebar-lists-items">
            <School className="sidebar-icon"/>
            <span className="lists-items-info">Courses</span>
          </li>
          <li className="sidebar-lists-items extended-button">
            <KeyboardArrowDown className="sidebar-icon"/>
            <span className="sidebarButton">See more</span>
          </li>
        </ul>

        <hr className="line-break"/>

        <ul className="sidebar-friends-lists">
          {closeFriendComponents}
          <li className="sidebar-lists-items extended-button">
            <KeyboardArrowDown className="sidebar-icon"/>
            <span className="sidebarButton">See more</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
