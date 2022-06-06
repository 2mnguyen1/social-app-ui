import "./post.css"
import { MoreVert, Favorite } from '@mui/icons-material';
import { Users } from '../../dummyData'
import {useState} from 'react'


export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLike, setIsLike] = useState(false)
    const user = Users.filter(user => user.id === post.userID)
    function likeHandler() {
        setIsLike(prev => !prev)
        if (!isLike) {
            setLike(prev => prev + 1)
        } else {
            setLike(prev => prev - 1)
        }
    }

    const styles = {
        color: isLike ? '#1877f2' : ''
    }
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="post-component">
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-topleft">
                    <img className="post-profile-image" src={PF + user[0].profilePictures} alt=""/>
                    <span className="post-author">{user[0].username}</span>
                    <span className="post-time">{post.date}</span>
                </div>
                <div className="post-topright">
                    <MoreVert className="option-icon"/>
                </div>
            </div>
            <div className="post-center">
                <span className="post-text">
                    {post.description}
                </span>
                <img className="post-image" src={PF + post.photo} alt=""/>
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
