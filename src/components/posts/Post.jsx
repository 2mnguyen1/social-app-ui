import "./post.css"
import { MoreVert, FavoriteBorder } from '@mui/icons-material';
import { Users } from '../../dummyData'
export default function Post({post}) {
    const user = Users.filter(user => user.id === post.userID)

  return (
    <div className="post-component">
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-topleft">
                    <img className="post-profile-image" src={user[0].profilePictures} alt=""/>
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
                <img className="post-image" src={post.photo} alt=""/>
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <FavoriteBorder className="like-icon"/>
                    <span className="post-like-counter">{post.like}</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
