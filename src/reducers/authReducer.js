import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';

export default function AuthReducer(state = {}, action) {

  switch (action.type) {
    case types.LOGIN:
      return action.isAuthenticated;

		case types.LOGOUT:
			return action.isLoggedOut;

    default:
      return state;
  }

}
