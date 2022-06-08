import './feed.css'
import Share from '../share/Share'
import Post from '../posts/Post'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'


export default function Feed({username}) {
  const [posts, setPosts] = useState([])
  const { user } = useContext(AuthContext)

  useEffect(() => {
    async function fetchPosts() {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("/posts/timeline/" + user._id);
      setPosts(res.data)
    }
    fetchPosts()
  }, [username, user._id])

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
