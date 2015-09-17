(function() {
	'use strict';

	module.exports = {
		"lint": {
			"rules": {
				"html": {
					"gateway": {
						"doctype-first": true,
						"tag-pair": true,
						"tag-self-close": true,
						"id-unique": true,
						"attr-lowercase": true,
						"doctype-html5": true,
						"head-script-disabled": true
					},
					"templates": {
						"doctype-first": false,
						"tag-pair": true,
						"tag-self-close": true,
						"id-unique": true,
						"attr-lowercase": true,
						"doctype-html5": false,
						"head-script-disabled": true
					}
				},
				"css": {},
				"js": {
					"strict": true,
					"curly": true,
					"eqeqeq": true,
					"immed": true,
					"latedef": true,
					"newcap": true,
					"noarg": true,
					"sub": true,
					"undef": false,
					"boss": true,
					"eqnull": true,
					"browser": true,
					"unused": true,
					"proto": true,
					"expr": true,
					"globals": {
						"jQuery": true,
						"define": true,
						"require": true,
						"console": true,
						"$": true,
						"_": true,
						"asyncTest": true,
						"deepEqual": true,
						"equal": true,
						"expect": true,
						"module": true,
						"notDeepEqual": true,
						"notEqual": true,
						"notStrictEqual": true,
						"ok": true,
						"QUnit": true,
						"raises": true,
						"start": true,
						"stop": true,
						"strictEqual": true,
						"test": true,
						"throws": true,
						"prompt": true,
						"alert": true
					}
				},
				"jscs": {
					"disallowMultipleVarDecl": false,
					"disallowSpacesInsideObjectBrackets": true
				}
			}
		}
	};
})();