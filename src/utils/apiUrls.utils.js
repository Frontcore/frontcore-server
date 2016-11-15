module.exports = {
	"api": {
		"v1": "/api/v1"
	},
	"path": {
		"auth": {
			"login": "/auth/login",
			"logout": "/auth/logout"
		},
		"projects": {
			"list": "/projects/list"
		},
		"project": {
			"browse": {
				"files": "/browse/project/files"
			},
			"create": "/upload/config/file",
			"info": "/project/info"
		},
		"lint": {
			"js": {
				"list": "/lint/js/list"
			}
		}
	}
};
