import './topbar.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar-container'>
        <div className='topbar-left'>
          <span className='logo'>MinhSocial</span>
        </div>
        <div className='topbar-center'>
          <div className='search-bar'>
            <Search className='search-icon'/>
            <input className='search-input' placeholder='Search MinhSocial'/>
          </div>
        </div>
        <div className='topbar-right'>
          <div className='topbar-links'>
            <span className='homepage'>HomePage</span>
            <span className='timeline'>Timeline</span>
          </div>
          <div className='topbar-icons'>
                <div className='topbar-icons-items'>
                  <Person />
                  <span className='icon-badge'>1</span>
                </div>
                <div className='topbar-icons-items'>
                  <Chat />
                  <span className='icon-badge'>1</span>
                </div>
                <div className='topbar-icons-items'>
                  <Notifications />
                  <span className='icon-badge'>1</span>
                </div>
                <div className='topbar-img'></div>
          </div>
        </div>
    </div>
  )
}
