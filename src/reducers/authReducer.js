import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';

export default function AuthReducer(state = {}, action) {

  switch (action.type) {
    case types.LOGIN:
      return action.posts;

		case types.LOGOUT:
			return action.posts;

    default:
      return state;
  }

}
