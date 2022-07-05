import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

// modify to factory pattern to share the store

export default function createStoreInstance(preloadedState = {}) {
	return createStore(reducer, preloadedState, applyMiddleware(thunk));
}


// const store = createStore(reducer, applyMiddleware(thunk));
//
// export default store;
