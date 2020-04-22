import { COMMENTS_CLICK, LIKES_CLICK, NEW_POST, SHARES_CLICK } from '../action.types/action.types';

export const commentsHandler = (id) => {
  return {
    type: COMMENTS_CLICK,
    payload: id,
  };
};

export const sharesHandler = (id) => {
    return {
        type: SHARES_CLICK,
        payload: id,
    };
};

export const likesHandler = (id) => {
    return {
        type: LIKES_CLICK,
        payload: id,
    };
};

export const newPostHandler = (post) => {
    return {
        type: NEW_POST,
        payload: post
    }
};
