import "./post.css"
import { MoreVert, FavoriteBorder } from '@mui/icons-material';

export default function Post() {
  return (
    <div className="post-component">
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-topleft">
                    <div className="post-profile-image"></div>
                    <span className="post-author">Minh Nguyen</span>
                    <span className="post-time">5 minutes ago</span>
                </div>
                <div className="post-topright">
                    <MoreVert className="option-icon"/>
                </div>
            </div>
            <div className="post-center">
                <span className="post-text">
                    This guy is so handsome!
                </span>
                <div className="post-image"></div>
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <FavoriteBorder className="like-icon"/>
                    <span className="post-like-counter">23</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment">3 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
