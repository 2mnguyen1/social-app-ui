import "./post.css"
import { MoreVert, Favorite } from '@mui/icons-material';
import {useState, useEffect} from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'

export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length)
    const [isLike, setIsLike] = useState(false)
    const [users, setUsers] = useState({})
    // const user = users.filter(user => user.id === post.userID)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const styles = {
        color: isLike ? '#1877f2' : ''
    }

    function likeHandler() {
        setIsLike(prev => !prev)
        if (!isLike) {
            setLike(prev => prev + 1)
        } else {
            setLike(prev => prev - 1)
        }
    }

    useEffect(() => {
        async function fetchUsers() {
            const res = await axios.get(`users/${post.userID}`)
            setUsers(res.data)
        }
        fetchUsers()
    }, [post.userID])


  return (
    <div className="post-component">
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-topleft">
                    <Link to={`profile/${post.username}`}>
                        <img className="post-profile-image" src={users.profilePicture || PF + 'images/noAvata.jpg'} alt=""/>
                    </Link>
                    <span className="post-author">{users.username}</span>
                    <span className="post-time">{format(post.createdAt)}</span>
                </div>
                <div className="post-topright">
                    <MoreVert className="option-icon"/>
                </div>
            </div>
            <div className="post-center">
                <span className="post-text">
                    {post.description || "No description"}
                </span>
                <img className="post-image" src={PF + post.image} alt=""/>
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <Favorite onClick={likeHandler} className="like-icon" style={styles}/>
                    <span className="post-like-counter">{like}</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
