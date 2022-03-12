import _ from "lodash";
import {
	EDIT_STREAM,
	DELETE_STREAM,
	CREATE_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
} from "../actions/types";

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')}
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
