db.frontcoredb.jshint.rules.options.enforcing.drop();
db.frontcoredb.jshint.rules.options.relaxing.drop();
db.frontcoredb.jshint.rules.options.environments.drop();

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "bitwise",
	"purpose": "This option prohibits the use of bitwise operators such as ^ (XOR), | (OR) and others.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "curly",
	"purpose": "This option requires you to always put curly braces around blocks in loops and conditionals.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "eqeqeq",
	"purpose": "This options prohibits the use of == and != in favor of === and !==.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "es3",
	"purpose": "This option tells JSHint that your code needs to adhere to ECMAScript 3 specification.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "es5",
	"purpose": "This option enables syntax first defined in the ECMAScript 5.1 specification. This includes allowing reserved keywords as object properties.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "forin",
	"purpose": "This option requires all for in loops to filter object's items.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "freeze",
	"purpose": "This options prohibits overwriting prototypes of native objects such as Array, Date and so on.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "funcscope",
	"purpose": "This option suppresses warnings about declaring variables inside of control structures while accessing them later from the outside.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "futurehostile",
	"purpose": "This option enables warnings about the use of identifiers which are defined in future versions of JavaScript.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "globals",
	"purpose": "This option can be used to specify a white list of global variables that are not formally defined in the source code.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "iterator",
	"purpose": "This option suppresses warnings about the __iterator__ property. This property is not supported by all browsers so use it carefully.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "latedef",
	"purpose": "This option prohibits the use of a variable before it was defined.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "maxcomplexity",
	"purpose": "This option lets you control cyclomatic complexity throughout your code.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "maxdepth",
	"purpose": "This option lets you control how nested do you want your blocks to be.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "maxerr",
	"purpose": "This options allows you to set the maximum amount of warnings JSHint will produce before giving up.",
	"defaults": 50
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "maxparams",
	"purpose": "This option lets you set the max number of formal parameters allowed per function.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "maxstatements",
	"purpose": "This option lets you set the max number of statements allowed per function.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "noarg",
	"purpose": "This option prohibits the use of arguments.caller and arguments.callee.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "nocomma",
	"purpose": "This option prohibits the use of the comma operator.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "nonbsp",
	"purpose": "This option warns about 'non-breaking whitespace' characters.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "nonew",
	"purpose": "This option prohibits the use of constructor functions for side-effects.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "notypeof",
	"purpose": "This option suppresses warnings about invalid typeof operator values.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "shadow",
	"purpose": "This option suppresses warnings about variable shadowing i.e. declaring a variable that had been already declared somewhere in the outer scope.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "singleGroups",
	"purpose": "This option prohibits the use of the grouping operator when it is not strictly required.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "strict",
	"purpose": "This option requires all functions to run in ECMAScript 5's strict mode.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "undef",
	"purpose": "This option prohibits the use of explicitly undeclared variables.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "unused",
	"purpose": "This option warns when you define and never use your variables.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.enforcing.insert({
	"rule": "varstmt",
	"purpose": "",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "asi",
	"purpose": "This option suppresses warnings about missing semicolons.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "boss",
	"purpose": "This option suppresses warnings about the use of assignments in cases where comparisons are expected.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "debug",
	"purpose": "This option suppresses warnings about the debugger statements in your code.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "elision",
	"purpose": "This option tells JSHint that your code uses ES3 array elision elements, or empty elements.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "eqnull",
	"purpose": "This option suppresses warnings about == null comparisons. Such comparisons are often useful when you want to check if a variable is null or undefined.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "esnext",
	"purpose": "This option tells JSHint that your code uses ECMAScript 6 specific syntax.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "evil",
	"purpose": "This option suppresses warnings about the use of eval.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "expr",
	"purpose": "This option suppresses warnings about the use of expressions where normally you would expect to see assignments or function calls.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "globalstrict",
	"purpose": "This option suppresses warnings about the use of global strict mode.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "lastsemic",
	"purpose": "This option suppresses warnings about missing semicolons, but only when the semicolon is omitted for the last statement in a one-line block",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "loopfunc",
	"purpose": "This option suppresses warnings about functions inside of loops.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "moz",
	"purpose": "This options tells JSHint that your code uses Mozilla JavaScript extensions.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "noyield",
	"purpose": "This option suppresses warnings about generator functions with no yield statement in them.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "plusplus",
	"purpose": "This option prohibits the use of unary increment and decrement operators.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "proto",
	"purpose": "This option suppresses warnings about the __proto__ property.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "scripturl",
	"purpose": "This option suppresses warnings about 'weird' constructions like new function () { ... } and new Object;.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "validthis",
	"purpose": "This option suppresses warnings about possible strict violations when the code is running in strict mode and you use this in a non-constructor function. ",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.relaxing.insert({
	"rule": "withstmt",
	"purpose": "This option suppresses warnings about the use of the with statement.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "browser",
	"purpose": "This option defines globals exposed by modern browsers: all the way from good old document and navigator to the HTML5 FileReader and other new developments in the browser world.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "browserify",
	"purpose": "This option defines globals available when using the Browserify tool to build a project.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "couch",
	"purpose": "This option defines globals exposed by CouchDB.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "devel",
	"purpose": "This option defines globals that are usually used for logging poor-man's debugging: console, alert, etc.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "dojo",
	"purpose": "This option defines globals exposed by the Dojo Toolkit.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "jasmine",
	"purpose": "This option defines globals exposed by the Jasmine unit testing framework.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "jquery",
	"purpose": "This option defines globals exposed by the jQuery JavaScript library.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "mocha",
	"purpose": "This option defines globals exposed by the 'BDD' and 'TDD' UIs of the Mocha unit testing framework.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "module",
	"purpose": "This option informs JSHint that the input code describes an ECMAScript 6 module. All module code is interpreted as strict mode code.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "mootools",
	"purpose": "This option defines globals exposed by the MooTools JavaScript framework.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "node",
	"purpose": "This option defines globals available when your code is running inside of the Node runtime environment.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "nonstandard",
	"purpose": "This option defines non-standard but widely adopted globals such as escape and unescape.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "phantom",
	"purpose": "This option defines globals available when your core is running inside of the PhantomJS runtime environment.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "prototypejs",
	"purpose": "This option defines globals exposed by the Prototype JavaScript framework.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "qunit",
	"purpose": "This option defines globals exposed by the QUnit unit testing framework.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "rhino",
	"purpose": "This option defines globals available when your code is running inside of the Rhino runtime environment.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "shelljs",
	"purpose": "This option defines globals exposed by the ShellJS library.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "typed",
	"purpose": "This option defines globals for typed array constructors.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "worker",
	"purpose": "This option defines globals available when your code is running inside of a Web Worker.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "wsh",
	"purpose": "This option defines globals available when your code is running as a script for the Windows Script Host.",
	"defaults": ""
});

db.frontcoredb.jshint.rules.options.environments.insert({
	"rule": "yui",
	"purpose": "This option defines globals exposed by the YUI JavaScript framework.",
	"defaults": ""
});