import './feed.css'
import Share from '../share/Share'
import Post from '../posts/Post'
import { Posts } from '../../dummyData'

export default function Feed() {
  const PostComponents = Posts.map(post => {
    return <Post
      key={post.id}
      post={post}
    />
  })

  return (
    <div className="feed">
        <div className="feed-wrapper">
          <Share />
          {PostComponents}
        </div>
    </div>
  )
}
