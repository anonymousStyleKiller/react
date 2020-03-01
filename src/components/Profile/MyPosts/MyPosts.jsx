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
          <Post name = "Anton" lastname="Kharchenko" likesCount={0}/>
          <Post name = "Alex" lastname="Glinka" likesCount={23}/>

      </div>
    </div>
  )

}

export default MyPosts;