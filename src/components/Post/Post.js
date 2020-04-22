import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import {
  MdPlaylistAddCheck,
  IoIosArrowDown,
  AiOutlineMessage,
  FaShare,
  FiHeart,
  FiUpload,
} from 'react-icons/all';
import {
  commentsHandler,
  likesHandler,
  sharesHandler,
} from '../../store/actions/posts.actions';

import './Post.css';

const Post = ({ author, body, date, comments, shares, likes, id }) => {
  const [isContentOpen, setContentHandler] = useState(true);
  const contentHandler = () => setContentHandler(!isContentOpen);
  const dispatch = useDispatch();
  return (
    <div className="post-data">
      <div className="user-block">
        <img src={author.image} alt="user-public" />
      </div>

      <div className="post-info">
        <div className="user-info">
          <p>
            <span className="user-name">
              {author.name} {<MdPlaylistAddCheck />}
            </span>
            <span className="post-settings">
              {author.nickName} • {date}
            </span>
          </p>

          <div onClick={contentHandler} className="arrow-btn">
            {<IoIosArrowDown />}
          </div>
        </div>
        {isContentOpen ? (
          <div className="main-content">
            <p>{body.content}</p>
            <img src={body.image} alt="content-img" />
          </div>
        ) : null}
      </div>

      <ul className="bottom-data">
        <li onClick={() => dispatch(commentsHandler(id))}>
          <AiOutlineMessage /> {comments.count}
        </li>
        <li onClick={() => dispatch(sharesHandler(id))}>
          <FaShare /> {shares.count}
        </li>
        <li onClick={() => dispatch(likesHandler(id))}>
          <FiHeart /> {likes.count}
        </li>
        <li>
          <FiUpload />
        </li>
      </ul>
    </div>
  );
};

export default Post;
