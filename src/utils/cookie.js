import cookie from 'react-cookie';

export default class Cookie {
	create(name, content, options) {
		cookie.save(name, content, options);
	}

	delete(name, options) {
		cookie.remove(name, options);
	}

	read(name) {
		return cookie.load(name);
	}
};
