import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./profile.css"
import { useParams } from 'react-router-dom'

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [users, setUsers] = useState({})
  const username = useParams().username;

  useEffect(() => {
        async function fetchUsers() {
            const res = await axios.get(`/users?username=${username}`)
            setUsers(res.data)
        }
        fetchUsers()
    }, [username])

  return (
    <div>
        <Topbar />
        <div className="profile-container">
          <Sidebar />
          <div className="profile-right">
            <div className="profile-right-top">
                <div className="profile-cover">
                    <img src={users.coverPictures || PF + "/images/defaultCover.png"} alt="" className="profile-cover-image"/>
                    <img src={users.profilePicture || PF + "/images/noAvata.jpg"} alt="" className="profile-user-image"/>
                </div>
                <div className="profile-info">
                    <h4 className="profile-username">{users.username}</h4>
                    <span className="profile-description">{users.description}</span>
                </div>
            </div>
            <div className="profile-right-bot">
                <Feed username={username}/>
                <Rightbar user={users}/>
            </div>
          </div>
        </div>
    </div>
  )
}
