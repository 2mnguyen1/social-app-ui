import './feed.css'
import Share from '../share/Share'
import Post from '../posts/Post'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get("posts/timeline/627845f0db2e16d38e9c2b34")
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

  const PostComponents = posts.map(post => {
    return <Post
      key={post._id}
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
