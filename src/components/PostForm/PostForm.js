import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newPostHandler } from '../../store/actions/posts.actions';

import { posts } from '../../store/selectors/postsSelectors';

import './PostForm.css';

const PostForm = () => {
  const [textBody, setTextBody] = useState("");
  const [postImage, setPostImage] = useState("");
  const [postAuthor, setPostAuthor] = useState("none");
  const authors = [];
  const dispatch = useDispatch();
  const authorsData = new Set(
    useSelector(posts).map((post) => post.author.name)
  ).forEach((author) => {
    authors.push(author);
  });
  const postAuthorHandler = (event) => {
    setPostAuthor(event.target.value);
  };
  const textBodyHandler = (event) => {
    setTextBody(event.target.value);
  };
  const imagePostHandler = (event) => {
    setPostImage(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!postAuthor) {
      alert("Please, select author form list!!!");
    }
    if (!textBody) {
      alert("Please, type some post text!!!");
    }
    if (!postImage) {
      alert("Please, paste image link!!!");
    }
    const resultPostData = {
      author: {
        name: postAuthor,
      },
      body: {
        image: postImage,
        content: textBody,
      },
    };
    resetFormFields();
    dispatch(newPostHandler(resultPostData));
  };
  const resetFormFields = () => {
    setTextBody("");
    setPostImage("");
    setPostAuthor("none");
  };
  return (
    <form className="post-form">
      <input
        onChange={textBodyHandler}
        type="text"
        value={textBody}
        placeholder="enter post body"
      />
      <input
        onChange={imagePostHandler}
        type="text"
        value={postImage}
        placeholder="paste img link"
      />
      <select
        onChange={postAuthorHandler}
        name="authors"
        id="authors-names"
        value={postAuthor}
      >
        <option value="none" hidden="">
          Choose author
        </option>
        {authors.map((author) => (
          <option key={author} value={author}>
            {author}
          </option>
        ))}
      </select>
      <input
        onClick={submitHandler}
        className="submit-btn"
        type="submit"
        value="Create Post"
      />
    </form>
  );
};

export default PostForm;
