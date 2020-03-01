import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
          <Post name = "Anton" lastname="Kharchenko" />
          <Post name = "Alex" lastname="Glinka" />

      </div>
    </div>
  )

}

export default MyPosts;