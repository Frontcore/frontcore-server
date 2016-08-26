module.exports = {
	jshint: [{
	  "type": "enforcing",
		"rule": "bitwise",
		"purpose": "This option prohibits the use of bitwise operators such as ^ (XOR), | (OR) and others.",
		"defaults": true
	}, {
	  "type": "enforcing",
		"rule": "curly",
		"purpose": "This option requires you to always put curly braces around blocks in loops and conditionals.",
		"defaults": true
	}, {
	  "type": "enforcing",
		"rule": "eqeqeq",
		"purpose": "This options prohibits the use of == and != in favor of === and !==.",
		"defaults": true
	}, {
	  "type": "enforcing",
		"rule": "es3",
		"purpose": "This option tells JSHint that your code needs to adhere to ECMAScript 3 specification.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "es5",
		"purpose": "This option enables syntax first defined in the ECMAScript 5.1 specification. This includes allowing reserved keywords as object properties.",
		"defaults": true
	}, {
	  "type": "enforcing",
		"rule": "forin",
		"purpose": "This option requires all for in loops to filter object's items.",
		"defaults": true
	}, {
	  "type": "enforcing",
		"rule": "freeze",
		"purpose": "This options prohibits overwriting prototypes of native objects such as Array, Date and so on.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "funcscope",
		"purpose": "This option suppresses warnings about declaring variables inside of control structures while accessing them later from the outside.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "futurehostile",
		"purpose": "This option enables warnings about the use of identifiers which are defined in future versions of JavaScript.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "globals",
		"purpose": "This option can be used to specify a white list of global variables that are not formally defined in the source code.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "iterator",
		"purpose": "This option suppresses warnings about the __iterator__ property. This property is not supported by all browsers so use it carefully.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "latedef",
		"purpose": "This option prohibits the use of a variable before it was defined.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "maxcomplexity",
		"purpose": "This option lets you control cyclomatic complexity throughout your code.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "maxdepth",
		"purpose": "This option lets you control how nested do you want your blocks to be.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "maxerr",
		"purpose": "This options allows you to set the maximum amount of warnings JSHint will produce before giving up.",
		"defaults": 50
	}, {
	  "type": "enforcing",
		"rule": "maxparams",
		"purpose": "This option lets you set the max number of formal parameters allowed per function.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "maxstatements",
		"purpose": "This option lets you set the max number of statements allowed per function.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "noarg",
		"purpose": "This option prohibits the use of arguments.caller and arguments.callee.",
		"defaults": true
	}, {
	  "type": "enforcing",
		"rule": "nocomma",
		"purpose": "This option prohibits the use of the comma operator.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "nonbsp",
		"purpose": "This option warns about 'non-breaking whitespace' characters.",
		"defaults": true
	}, {
	  "type": "enforcing",
		"rule": "nonew",
		"purpose": "This option prohibits the use of constructor functions for side-effects.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "notypeof",
		"purpose": "This option suppresses warnings about invalid typeof operator values.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "shadow",
		"purpose": "This option suppresses warnings about variable shadowing i.e. declaring a variable that had been already declared somewhere in the outer scope.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "singleGroups",
		"purpose": "This option prohibits the use of the grouping operator when it is not strictly required.",
		"defaults": false
	}, {
	  "type": "enforcing",
		"rule": "strict",
		"purpose": "This option requires all functions to run in ECMAScript 5's strict mode.",
		"defaults": true
	}, {
	  "type": "enforcing",
		"rule": "undef",
		"purpose": "This option prohibits the use of explicitly undeclared variables.",
		"defaults": true
	}, {
	  "type": "enforcing",
		"rule": "unused",
		"purpose": "This option warns when you define and never use your variables.",
		"defaults": true
	}, {
	  "type": "enforcing",
		"rule": "varstmt",
		"purpose": "Disallow any var statements. Only `let` and `const` are allowed.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "asi",
		"purpose": "This option suppresses warnings about missing semicolons.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "boss",
		"purpose": "This option suppresses warnings about the use of assignments in cases where comparisons are expected.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "debug",
		"purpose": "This option suppresses warnings about the debugger statements in your code.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "elision",
		"purpose": "This option tells JSHint that your code uses ES3 array elision elements, or empty elements.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "eqnull",
		"purpose": "This option suppresses warnings about == null comparisons. Such comparisons are often useful when you want to check if a variable is null or undefined.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "esnext",
		"purpose": "This option tells JSHint that your code uses ECMAScript 6 specific syntax.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "evil",
		"purpose": "This option suppresses warnings about the use of eval.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "expr",
		"purpose": "This option suppresses warnings about the use of expressions where normally you would expect to see assignments or function calls.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "globalstrict",
		"purpose": "This option suppresses warnings about the use of global strict mode.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "lastsemic",
		"purpose": "This option suppresses warnings about missing semicolons, but only when the semicolon is omitted for the last statement in a one-line block",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "loopfunc",
		"purpose": "This option suppresses warnings about functions inside of loops.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "moz",
		"purpose": "This options tells JSHint that your code uses Mozilla JavaScript extensions.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "noyield",
		"purpose": "This option suppresses warnings about generator functions with no yield statement in them.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "plusplus",
		"purpose": "This option prohibits the use of unary increment and decrement operators.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "proto",
		"purpose": "This option suppresses warnings about the __proto__ property.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "scripturl",
		"purpose": "This option suppresses warnings about 'weird' constructions like new function () { ... } and new Object;.",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "validthis",
		"purpose": "This option suppresses warnings about possible strict violations when the code is running in strict mode and you use this in a non-constructor function. ",
		"defaults": false
	}, {
	  "type": "relaxing",
		"rule": "withstmt",
		"purpose": "This option suppresses warnings about the use of the with statement.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "browser",
		"purpose": "This option defines globals exposed by modern browsers: all the way from good old document and navigator to the HTML5 FileReader and other new developments in the browser world.",
		"defaults": true
	}, {
	  "type": "environments",
		"rule": "browserify",
		"purpose": "This option defines globals available when using the Browserify tool to build a project.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "couch",
		"purpose": "This option defines globals exposed by CouchDB.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "devel",
		"purpose": "This option defines globals that are usually used for logging poor-man's debugging: console, alert, etc.",
		"defaults": true
	}, {
	  "type": "environments",
		"rule": "dojo",
		"purpose": "This option defines globals exposed by the Dojo Toolkit.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "jasmine",
		"purpose": "This option defines globals exposed by the Jasmine unit testing framework.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "jquery",
		"purpose": "This option defines globals exposed by the jQuery JavaScript library.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "mocha",
		"purpose": "This option defines globals exposed by the 'BDD' and 'TDD' UIs of the Mocha unit testing framework.",
		"defaults": true
	}, {
	  "type": "environments",
		"rule": "module",
		"purpose": "This option informs JSHint that the input code describes an ECMAScript 6 module. All module code is interpreted as strict mode code.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "mootools",
		"purpose": "This option defines globals exposed by the MooTools JavaScript framework.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "node",
		"purpose": "This option defines globals available when your code is running inside of the Node runtime environment.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "nonstandard",
		"purpose": "This option defines non-standard but widely adopted globals such as escape and unescape.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "phantom",
		"purpose": "This option defines globals available when your core is running inside of the PhantomJS runtime environment.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "prototypejs",
		"purpose": "This option defines globals exposed by the Prototype JavaScript framework.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "qunit",
		"purpose": "This option defines globals exposed by the QUnit unit testing framework.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "rhino",
		"purpose": "This option defines globals available when your code is running inside of the Rhino runtime environment.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "shelljs",
		"purpose": "This option defines globals exposed by the ShellJS library.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "typed",
		"purpose": "This option defines globals for typed array constructors.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "worker",
		"purpose": "This option defines globals available when your code is running inside of a Web Worker.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "wsh",
		"purpose": "This option defines globals available when your code is running as a script for the Windows Script Host.",
		"defaults": false
	}, {
	  "type": "environments",
		"rule": "yui",
		"purpose": "This option defines globals exposed by the YUI JavaScript framework.",
		"defaults": false
	}]
};
