import { combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import _ from 'lodash';

import {
	SIGN_IN,
	SIGN_OUT,
	CREATE_STREAM,
	DELETE_STREAM,
	EDIT_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS
} from "./types";

const INITIAL_STATE = {
	isSignedIn: null,
	userId: null
};

const isSignedIn = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case SIGN_IN:
			return { ...state, isSignedIn: true, userId: action.payload };
		case SIGN_OUT:
			return { ...state, isSignedIn: false, userId: null };
		default:
			return state;
	}
}

const streamReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			// const newState = { ...state };
			// newState[action.payload.id] = action.payload;
			// return newState;
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return _.omit(state, action.payload);
		default:
			return state;
	}
}

export default combineReducers({
	auth: isSignedIn,
	form: formReducer,
	streams: streamReducer
});