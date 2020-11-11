import React from 'react'

function Posts({ posts, loading }) {
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul className="list-group mb-4">
          {posts &&
            posts.map(post => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
        </ul>
      )}
    </>
  )
}

export default Posts
