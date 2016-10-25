import validate from 'validate.js';

export default class Validation {

	isEmpty(params) {
		return validate.isEmpty(params);
	}

	isMinLenExpected(...params) {
		// console.log(params[0]);
		// console.log(Object.keys(params[0]));
		if (!validate(params[0], params[1])) {
			return true;
		}
		return false;
	}

};
