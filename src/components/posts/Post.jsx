import "./post.css"
import { MoreVert, FavoriteBorder } from '@mui/icons-material';

export default function Post() {
  return (
    <div className="post-component">
        <div className="post-wrapper">
            <div className="post-top">
                <div className="post-topleft">
                    <img className="post-profile-image" src="/assets/images/hinh1.JPG" alt=""/>
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
                <img className="post-image" src="/assets/images/hinh1.JPG" alt=""/>
            </div>
            <div className="post-bottom">
                <div className="post-bottom-left">
                    <FavoriteBorder className="like-icon"/>
                    <span className="post-like-counter">23k</span>
                </div>
                <div className="post-bottom-right">
                    <span className="post-comment">3k comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
