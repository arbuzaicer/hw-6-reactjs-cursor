import { combineReducers, createStore } from 'redux';
import postsReducer from './reducers/posts.reducer';

const reducers = combineReducers({
    postsReducer,
});

const store = createStore(reducers);

export default store;
