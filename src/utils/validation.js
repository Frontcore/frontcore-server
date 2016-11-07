import validate from 'validate.js';

export default class Validation {

	isEmpty(params) {
		return validate.isEmpty(params);
	}

	isMinLenExpected(...params) {
		if (!validate(params[0], params[1])) {
			return true;
		}
		return false;
	}

	isEmail(...params) {
		if (!validate(params[0], params[1])) {
			return true;
		}
		return false;
	}

};
