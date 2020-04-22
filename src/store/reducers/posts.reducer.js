import { ANAKIN_IMAGE, RAY_IMAGE, YODA_IMAGE } from '../staticData';
import {
  COMMENTS_CLICK,
  LIKES_CLICK,
  NEW_POST,
  SHARES_CLICK,
} from '../action.types/action.types';

const initialState = {
  posts: [
    {
      id: 1,
      author: {
        name: "Anakin Skywalker",
        image: ANAKIN_IMAGE,
        nickName: "@dart_vader",
      },
      date: "18/04/2020",
      body: {
        image: RAY_IMAGE,
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      },
      comments: {
        count: 482,
        isCommented: false,
      },
      shares: {
        count: 146,
        isShared: false,
      },
      likes: {
        count: 146,
        isLiked: false,
      },
      download: null,
    },
    {
      id: 2,
      author: {
        name: "Yoda",
        image: YODA_IMAGE,
        nickName: "@yoda",
      },
      date: "14/04/2020",
      body: {
        image: RAY_IMAGE,
        content: "I am Yoda guys!!!",
      },
      comments: {
        count: 74,
        isCommented: false,
      },
      shares: {
        count: 15,
        isShared: false,
      },
      likes: {
        count: 240,
        isLiked: false,
      },
      download: null,
    },
    {
      id: 3,
      author: {
        name: "Anakin Skywalker",
        image: ANAKIN_IMAGE,
        nickName: "@dart_vader",
      },
      date: "18/04/2020",
      body: {
        image: RAY_IMAGE,
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      },
      comments: {
        count: 482,
        isCommented: false,
      },
      shares: {
        count: 146,
        isShared: false,
      },
      likes: {
        count: 146,
        isLiked: false,
      },
      download: null,
    },
  ],
};

const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const postsData = [...state.posts.filter((post) => post.id !== payload)];
  const singlePost = state.posts.find((post) => post.id === payload);
  switch (type) {
    case COMMENTS_CLICK: {
      const resultData = changeStoreValues(
        singlePost,
        "comments",
        "isCommented",
        postsData,
        "id"
      );
      return {
        ...state,
        posts: resultData,
      };
    }
    case SHARES_CLICK: {
      const resultData = changeStoreValues(
        singlePost,
        "shares",
        "isShared",
        postsData,
        "id"
      );
      return {
        ...state,
        posts: resultData,
      };
    }
    case LIKES_CLICK: {
      const resultData = changeStoreValues(
        singlePost,
        "likes",
        "isLiked",
        postsData,
        "id"
      );
      return {
        ...state,
        posts: resultData,
      };
    }
    case NEW_POST: {
      const post = {
        id: state.posts.length+1,
        author: {
          name: payload.author.name,
          image: payload.author.name === "Yoda" ? YODA_IMAGE: ANAKIN_IMAGE,
          nickName: payload.author.name === "Yoda" ? "@yoda" : "@dart_vader",
        },
        date: "19/04/2020",
        body: {
          image: payload.body.image,
          content: payload.body.content,
        },
        comments: {
          count: 0,
          isCommented: false,
        },
        shares: {
          count: 0,
          isShared: false,
        },
        likes: {
          count: 0,
          isLiked: false,
        },
        download: null,
      };
      return {
        ...state, posts: [...state.posts, post]
      }
    }
    default: {
      return state;
    }
  }
};

const changeStoreValues = (single, key, isKey, total, sortingKey) => {
  single[key].count = single[key][isKey]
    ? single[key].count - 1
    : single[key].count + 1;
  single[key][isKey] = !single[key][isKey];
  return [...total, single].sort((a, b) => a[sortingKey] - b[sortingKey]);
};

export default postsReducer;
