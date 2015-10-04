db.frontcoredb.projects.meta.drop();

db.frontcoredb.projects.meta.insert({
	"projname": "",
	"version": "0.0.0",
	"projpath": "",
	"languages": {
		"html": true,
		"css": true,
		"javascript": true
	},
	"directory": {
		"html": {
			"files": [],
			"ignore": [],
			"options": {}
		},
		"css": {
			"files": [],
			"ignore": [],
			"options": {}
		},
		"js": {
			"files": [],
			"ignore": [],
			"options": {}
		}
	},
	"service": {
		"address": "localhost",
		"port": 9000
	}
});