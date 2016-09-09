module.exports = [{
    "category": "Possible Errors",
    "description": "These rules relate to possible syntax or logic errors in JavaScript code",
    "rules": [{
      "rule": "no-cond-assign",
      "description": "disallow assignment operators in conditional expressions",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-console",
      "description": "disallow the use of console",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-constant-condition",
      "description": "disallow constant expressions in conditions",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-control-regex",
      "description": "disallow control characters in regular expressions",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-debugger",
      "description": "disallow the use of debugger",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-dupe-args",
      "description": "disallow duplicate arguments in function definitions",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-dupe-keys",
      "description": "disallow duplicate keys in object literals",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-duplicate-case",
      "description": "disallow duplicate case labels",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-empty-character-class",
      "description": "disallow empty character classes in regular expressions",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-empty",
      "description": "disallow empty block statements",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-ex-assign",
      "description": "disallow reassigning exceptions in catch clauses",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-extra-boolean-cast",
      "description": "disallow unnecessary boolean casts",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-extra-parens",
      "description": "disallow unnecessary parentheses",
      "recommended": false,
      "fixable": true
    }, {
      "rule": "no-extra-semi",
      "description": "disallow unnecessary semicolons",
      "recommended": true,
      "fixable": true
    }, {
      "rule": "no-func-assign",
      "description": "disallow reassigning function declarations",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-inner-declarations",
      "description": "disallow function or var declarations in nested blocks",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-invalid-regexp",
      "description": "disallow invalid regular expression strings in RegExp constructors",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-irregular-whitespace",
      "description": "disallow irregular whitespace outside of strings and comments",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-obj-calls",
      "description": "disallow calling global object properties as functions",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-prototype-builtins",
      "description": "disallow calling some Object.prototype methods directly on objects",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-regex-spaces",
      "description": "disallow multiple spaces in regular expressions",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-sparse-arrays",
      "description": "disallow sparse arrays",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-template-curly-in-string",
      "description": "disallow template literal placeholder syntax in regular strings",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-unexpected-multiline",
      "description": "disallow confusing multiline expressions",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-unreachable",
      "description": "disallow unreachable code after return, throw, continue, and break statements",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-unsafe-finally",
      "description": "disallow control flow statements in finally blocks",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-unsafe-negation",
      "description": "disallow negating the left operand of relational operators",
      "recommended": false,
      "fixable": true
    }, {
      "rule": "use-isnan",
      "description": "require calls to isNaN() when checking for NaN",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "valid-jsdoc",
      "description": "enforce valid JSDoc comments",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "valid-typeof",
      "description": "enforce comparing typeof expressions against valid strings",
      "recommended": true,
      "fixable": false
    }]
  }, {
    "category": "Best Practices",
    "description": "These rules relate to better ways of doing things to help you avoid problems",
    "rules": [{
      "rule": "accessor-pairs",
      "description": "enforce getter and setter pairs in objects",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "array-callback-return",
      "description": "enforce return statements in callbacks of array methods",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "block-scoped-var",
      "description": "enforce the use of variables within the scope they are defined",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "class-methods-use-this",
      "description": "enforce that class methods utilize this",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "complexity",
      "description": "enforce a maximum cyclomatic complexity allowed in a program",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "consistent-return",
      "description": "require return statements to either always or never specify values",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "curly",
      "description": "enforce consistent brace style for all control statements",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "default-case",
      "description": "require default cases in switch statements",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "dot-location",
      "description": "enforce consistent newlines before and after dots",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "dot-notation",
      "description": "enforce dot notation whenever possible",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "eqeqeq",
      "description": "require the use of === and !==",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "guard-for-in",
      "description": "require for-in loops to include an if statement",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-alert",
      "description": "disallow the use of alert, confirm, and prompt",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-caller",
      "description": "disallow the use of arguments.caller or arguments.callee",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-case-declarations",
      "description": "disallow lexical declarations in case clauses",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-div-regex",
      "description": "disallow division operators explicitly at the beginning of regular expressions",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-else-return",
      "description": "disallow else blocks after return statements in if statements",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-empty-function",
      "description": "disallow empty functions",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-empty-pattern",
      "description": "disallow empty destructuring patterns",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-eq-null",
      "description": "disallow null comparisons without type-checking operators",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-eval",
      "description": "disallow the use of eval()",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-extend-native",
      "description": "disallow extending native types",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-extra-bind",
      "description": "disallow unnecessary calls to .bind()",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-extra-label",
      "description": "disallow unnecessary labels",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-fallthrough",
      "description": "disallow fallthrough of case statements",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-floating-decimal",
      "description": "disallow leading or trailing decimal points in numeric literals",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-global-assign",
      "description": "disallow assignments to native objects or read-only global variables",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-implicit-coercion",
      "description": "disallow shorthand type conversions",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-implicit-globals",
      "description": "disallow var and named function declarations in the global scope",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-implied-eval",
      "description": "disallow the use of eval()-like methods",
      "recommended": false,
      "fixable": false
      }, {
      "rule": "no-invalid-this",
      "description": "disallow this keywords outside of classes or class-like objects",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-iterator",
      "description": "disallow the use of the __iterator__ property",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-labels",
      "description": "disallow labeled statements",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-lone-blocks",
      "description": "disallow unnecessary nested blocks",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-loop-func",
      "description": "disallow function declarations and expressions inside loop statements",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-magic-numbers",
      "description": "disallow magic numbers",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-multi-spaces",
      "description": "disallow multiple spaces",
      "recommended": false,
      "fixable": true
    }, {
      "rule": "no-multi-str",
      "description": "disallow multiline strings",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-new-func",
      "description": "disallow new operators with the Function object",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-new-wrappers",
      "description": "disallow new operators with the String, Number, and Boolean objects",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-new",
      "description": "disallow new operators outside of assignments or comparisons",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-octal-escape",
      "description": "disallow octal escape sequences in string literals",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-octal",
      "description": "disallow octal literals",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-param-reassign",
      "description": "disallow reassigning function parameters",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-proto",
      "description": "disallow the use of the __proto__ property",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-redeclare",
      "description": "disallow var redeclaration",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-return-assign",
      "description": "disallow assignment operators in return statements",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-script-url",
      "description": "disallow javascript: urls",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-self-assign",
      "description": "disallow assignments where both sides are exactly the same",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-self-compare",
      "description": "disallow comparisons where both sides are exactly the same",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-sequences",
      "description": "disallow comma operators",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-throw-literal",
      "description": "disallow throwing literals as exceptions",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-unmodified-loop-condition",
      "description": "disallow unmodified loop conditions",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-unused-expressions",
      "description": "disallow unused expressions",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-unused-labels",
      "description": "disallow unused labels",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-useless-call",
      "description": "disallow unnecessary calls to .call() and .apply()",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-useless-concat",
      "description": "disallow unnecessary concatenation of literals or template literals",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-useless-escape",
      "description": "disallow unnecessary escape characters",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-void",
      "description": "disallow void operators",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-warning-comments",
      "description": "disallow specified warning terms in comments",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-with",
      "description": "disallow with statements",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "radix",
      "description": "enforce the consistent use of the radix argument when using parseInt()",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "vars-on-top",
      "description": "require var declarations be placed at the top of their containing scope",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "wrap-iife",
      "description": "require parentheses around immediate function invocations",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "yoda",
      "description": "require or disallow “Yoda” conditions",
      "recommended": false,
      "fixable": false
    }]
  }, {
    "category": "Strict Mode",
    "description": "These rules relate to strict mode directives",
    "rules": [{
      "rule": "strict",
      "description": "require or disallow strict mode directives",
      "recommended": false,
      "fixable": false
    }]
  }, {
    "category": "Variables",
    "description": "These rules relate to variable declarations",
    "rules": [{
      "rule": "no-catch-shadow",
      "description": "disallow catch clause parameters from shadowing variables in the outer scope",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-delete-var",
      "description": "disallow deleting variables",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-label-var",
      "description": "disallow labels that share a name with a variable",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-restricted-globals",
      "description": "disallow specified global variables",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-shadow-restricted-names",
      "description": "disallow identifiers from shadowing restricted names",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-shadow",
      "description": "disallow var declarations from shadowing variables in the outer scope",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-undef-init",
      "description": "disallow initializing variables to undefined",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-undef",
      "description": "disallow the use of undeclared variables unless mentioned in /*global */ comments",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-undefined",
      "description": "disallow the use of undefined as an identifier",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-unused-vars",
      "description": "disallow unused variables",
      "recommended": true,
      "fixable": false
    }, {
      "rule": "no-use-before-define",
      "description": "disallow the use of variables before they are defined",
      "recommended": false,
      "fixable": false
    }]
  }, {
    "category": "node.js-and-commonjs",
    "description": "These rules relate to code running in Node.js, or in browsers with CommonJS",
    "rules": [{
      "rule": "callback-return",
      "description": "require return statements after callbacks",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "global-require",
      "description": "require require() calls to be placed at top-level module scope",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "handle-callback-err",
      "description": "require error handling in callbacks",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-mixed-requires",
      "description": "disallow require calls to be mixed with regular var declarations",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-new-require",
      "description": "disallow new operators with calls to require",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-path-concat",
      "description": "disallow string concatenation with __dirname and __filename",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-process-env",
      "description": "disallow the use of process.env",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-process-exit",
      "description": "disallow the use of process.exit()",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-restricted-modules",
      "description": "disallow specified modules when loaded by require",
      "recommended": false,
      "fixable": false
    }, {
      "rule": "no-sync",
      "description": "disallow synchronous methods",
      "recommended": false,
      "fixable": false
    }]
  }, {
    "category": "stylistic-issues",
    "description": "These rules relate to style guidelines, and are therefore quite subjective",
    "rules": []
  }, {
    "category": "ecma-script-6",
    "description": "These rules relate to ES6, also known as ES2015",
    "rules": []
  }, {
    "category": "deprecated",
    "description": "These rules have been deprecated and replaced by newer rules",
    "rules": []
  }, {
    "category": "removed",
    "description": "These rules from older versions of ESLint have been replaced by newer rules",
    "rules": []
  }];
