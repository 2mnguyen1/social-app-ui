import "./share.css"
import {PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material';


export default function Share() {
  return (
    <div className="share-container">
        <div className="share-wrapper">
            <div className="share-top">
                <div className="share-image"></div>
                <input className="share-input" placeholder="What's on your mind, Minh?"></input>
            </div>
            <div className="share-bottom">
                <div className="share-options">
                    <div className="share-option">
                        <PermMedia htmlColor="tomato" className="share-icon"/>
                        <span className="share-text">Photo/Video</span>
                    </div>
                    <div className="share-option">
                        <Label htmlColor="blue" className="share-icon"/>
                        <span className="share-text">Tag</span>
                    </div>
                    <div className="share-option">
                        <Room htmlColor="orange" className="share-icon"/>
                        <span className="share-text">Location</span>
                    </div>
                    <div className="share-option">
                        <EmojiEmotions htmlColor="goldenrod" className="share-icon"/>
                        <span className="share-text">Feelings</span>
                    </div>
                </div>
                <button className="share-button">Post</button>
            </div>
        </div>
    </div>
  )
}
