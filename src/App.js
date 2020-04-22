import React from 'react';
import { useSelector } from 'react-redux';
import { posts } from './store/selectors/postsSelectors';

import Post from './components/Post/Post';
import PostForm from './components/PostForm/PostForm';

const App = () => {
  const postsData = useSelector(posts);
  const resultPostsData = postsData.map((post) => {
    const { id, author, date, body, comments, shares, likes, download } = post;
    return (
      <Post
        key={id}
        id={id}
        author={author}
        body={body}
        date={date}
        comments={comments}
        shares={shares}
        likes={likes}
        download={download}
      />
    );
  });
  return (
    <div className="App">
      {resultPostsData}
      <PostForm />
    </div>
  );
};

export default App;
