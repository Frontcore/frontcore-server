module.exports = [
  {
    "category": "Possible Errors",
    "description": "These rules relate to possible syntax or logic errors in JavaScript code",
    "rules": [
      {
        "rule": "no-cond-assign",
        "description": "disallow assignment operators in conditional expressions",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-console",
        "description": "disallow the use of console",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-constant-condition",
        "description": "disallow constant expressions in conditions",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-control-regex",
        "description": "disallow control characters in regular expressions",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-debugger",
        "description": "disallow the use of debugger",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-dupe-args",
        "description": "disallow duplicate arguments in function definitions",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-dupe-keys",
        "description": "disallow duplicate keys in object literals",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-duplicate-case",
        "description": "disallow duplicate case labels",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-empty-character-class",
        "description": "disallow empty character classes in regular expressions",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-empty",
        "description": "disallow empty block statements",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-ex-assign",
        "description": "disallow reassigning exceptions in catch clauses",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-extra-boolean-cast",
        "description": "disallow unnecessary boolean casts",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-extra-parens",
        "description": "disallow unnecessary parentheses",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "no-extra-semi",
        "description": "disallow unnecessary semicolons",
        "recommended": true,
        "fixable": true
      },
      {
        "rule": "no-func-assign",
        "description": "disallow reassigning function declarations",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-inner-declarations",
        "description": "disallow function or var declarations in nested blocks",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-invalid-regexp",
        "description": "disallow invalid regular expression strings in RegExp constructors",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-irregular-whitespace",
        "description": "disallow irregular whitespace outside of strings and comments",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-obj-calls",
        "description": "disallow calling global object properties as functions",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-prototype-builtins",
        "description": "disallow calling some Object.prototype methods directly on objects",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-regex-spaces",
        "description": "disallow multiple spaces in regular expressions",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-sparse-arrays",
        "description": "disallow sparse arrays",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-template-curly-in-string",
        "description": "disallow template literal placeholder syntax in regular strings",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-unexpected-multiline",
        "description": "disallow confusing multiline expressions",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-unreachable",
        "description": "disallow unreachable code after return, throw, continue, and break statements",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-unsafe-finally",
        "description": "disallow control flow statements in finally blocks",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-unsafe-negation",
        "description": "disallow negating the left operand of relational operators",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "use-isnan",
        "description": "require calls to isNaN() when checking for NaN",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "valid-jsdoc",
        "description": "enforce valid JSDoc comments",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "valid-typeof",
        "description": "enforce comparing typeof expressions against valid strings",
        "recommended": true,
        "fixable": false
      }
    ]
  },
  {
    "category": "Best Practices",
    "description": "These rules relate to better ways of doing things to help you avoid problems",
    "rules": [
      {
        "rule": "accessor-pairs",
        "description": "enforce getter and setter pairs in objects",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "array-callback-return",
        "description": "enforce return statements in callbacks of array methods",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "block-scoped-var",
        "description": "enforce the use of variables within the scope they are defined",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "class-methods-use-this",
        "description": "enforce that class methods utilize this",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "complexity",
        "description": "enforce a maximum cyclomatic complexity allowed in a program",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "consistent-return",
        "description": "require return statements to either always or never specify values",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "curly",
        "description": "enforce consistent brace style for all control statements",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "default-case",
        "description": "require default cases in switch statements",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "dot-location",
        "description": "enforce consistent newlines before and after dots",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "dot-notation",
        "description": "enforce dot notation whenever possible",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "eqeqeq",
        "description": "require the use of === and !==",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "guard-for-in",
        "description": "require for-in loops to include an if statement",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-alert",
        "description": "disallow the use of alert, confirm, and prompt",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-caller",
        "description": "disallow the use of arguments.caller or arguments.callee",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-case-declarations",
        "description": "disallow lexical declarations in case clauses",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-div-regex",
        "description": "disallow division operators explicitly at the beginning of regular expressions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-else-return",
        "description": "disallow else blocks after return statements in if statements",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-empty-function",
        "description": "disallow empty functions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-empty-pattern",
        "description": "disallow empty destructuring patterns",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-eq-null",
        "description": "disallow null comparisons without type-checking operators",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-eval",
        "description": "disallow the use of eval()",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-extend-native",
        "description": "disallow extending native types",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-extra-bind",
        "description": "disallow unnecessary calls to .bind()",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-extra-label",
        "description": "disallow unnecessary labels",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-fallthrough",
        "description": "disallow fallthrough of case statements",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-floating-decimal",
        "description": "disallow leading or trailing decimal points in numeric literals",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-global-assign",
        "description": "disallow assignments to native objects or read-only global variables",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-implicit-coercion",
        "description": "disallow shorthand type conversions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-implicit-globals",
        "description": "disallow var and named function declarations in the global scope",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-implied-eval",
        "description": "disallow the use of eval()-like methods",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-invalid-this",
        "description": "disallow this keywords outside of classes or class-like objects",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-iterator",
        "description": "disallow the use of the __iterator__ property",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-labels",
        "description": "disallow labeled statements",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-lone-blocks",
        "description": "disallow unnecessary nested blocks",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-loop-func",
        "description": "disallow function declarations and expressions inside loop statements",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-magic-numbers",
        "description": "disallow magic numbers",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-multi-spaces",
        "description": "disallow multiple spaces",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "no-multi-str",
        "description": "disallow multiline strings",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-new-func",
        "description": "disallow new operators with the Function object",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-new-wrappers",
        "description": "disallow new operators with the String, Number, and Boolean objects",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-new",
        "description": "disallow new operators outside of assignments or comparisons",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-octal-escape",
        "description": "disallow octal escape sequences in string literals",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-octal",
        "description": "disallow octal literals",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-param-reassign",
        "description": "disallow reassigning function parameters",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-proto",
        "description": "disallow the use of the __proto__ property",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-redeclare",
        "description": "disallow var redeclaration",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-return-assign",
        "description": "disallow assignment operators in return statements",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-script-url",
        "description": "disallow javascript: urls",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-self-assign",
        "description": "disallow assignments where both sides are exactly the same",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-self-compare",
        "description": "disallow comparisons where both sides are exactly the same",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-sequences",
        "description": "disallow comma operators",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-throw-literal",
        "description": "disallow throwing literals as exceptions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-unmodified-loop-condition",
        "description": "disallow unmodified loop conditions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-unused-expressions",
        "description": "disallow unused expressions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-unused-labels",
        "description": "disallow unused labels",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-useless-call",
        "description": "disallow unnecessary calls to .call() and .apply()",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-useless-concat",
        "description": "disallow unnecessary concatenation of literals or template literals",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-useless-escape",
        "description": "disallow unnecessary escape characters",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-void",
        "description": "disallow void operators",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-warning-comments",
        "description": "disallow specified warning terms in comments",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-with",
        "description": "disallow with statements",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "radix",
        "description": "enforce the consistent use of the radix argument when using parseInt()",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "vars-on-top",
        "description": "require var declarations be placed at the top of their containing scope",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "wrap-iife",
        "description": "require parentheses around immediate function invocations",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "yoda",
        "description": "require or disallow “Yoda” conditions",
        "recommended": false,
        "fixable": false
      }
    ]
  },
  {
    "category": "Strict Mode",
    "description": "These rules relate to strict mode directives",
    "rules": [
      {
        "rule": "strict",
        "description": "require or disallow strict mode directives",
        "recommended": false,
        "fixable": false
      }
    ]
  },
  {
    "category": "Variables",
    "description": "These rules relate to variable declarations",
    "rules": [
      {
        "rule": "no-catch-shadow",
        "description": "disallow catch clause parameters from shadowing variables in the outer scope",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-delete-var",
        "description": "disallow deleting variables",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-label-var",
        "description": "disallow labels that share a name with a variable",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-restricted-globals",
        "description": "disallow specified global variables",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-shadow-restricted-names",
        "description": "disallow identifiers from shadowing restricted names",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-shadow",
        "description": "disallow var declarations from shadowing variables in the outer scope",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-undef-init",
        "description": "disallow initializing variables to undefined",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-undef",
        "description": "disallow the use of undeclared variables unless mentioned in /*global */ comments",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-undefined",
        "description": "disallow the use of undefined as an identifier",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-unused-vars",
        "description": "disallow unused variables",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-use-before-define",
        "description": "disallow the use of variables before they are defined",
        "recommended": false,
        "fixable": false
      }
    ]
  },
  {
    "category": "Node.js and Commonjs",
    "description": "These rules relate to code running in Node.js, or in browsers with CommonJS",
    "rules": [
      {
        "rule": "callback-return",
        "description": "require return statements after callbacks",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "global-require",
        "description": "require require() calls to be placed at top-level module scope",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "handle-callback-err",
        "description": "require error handling in callbacks",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-mixed-requires",
        "description": "disallow require calls to be mixed with regular var declarations",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-new-require",
        "description": "disallow new operators with calls to require",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-path-concat",
        "description": "disallow string concatenation with __dirname and __filename",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-process-env",
        "description": "disallow the use of process.env",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-process-exit",
        "description": "disallow the use of process.exit()",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-restricted-modules",
        "description": "disallow specified modules when loaded by require",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-sync",
        "description": "disallow synchronous methods",
        "recommended": false,
        "fixable": false
      }
    ]
  },
  {
    "category": "Stylistic Issues",
    "description": "These rules relate to style guidelines, and are therefore quite subjective",
    "rules": [
      {
        "rule": "array-bracket-spacing",
        "description": "enforce consistent spacing inside array brackets",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "block-spacing",
        "description": "enforce consistent spacing inside single-line blocks",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "brace-style",
        "description": "enforce consistent brace style for blocks",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "camelcase",
        "description": "enforce camelcase naming convention",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "comma-dangle",
        "description": "require or disallow trailing commas",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "comma-spacing",
        "description": "enforce consistent spacing before and after commas",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "comma-style",
        "description": "enforce consistent comma style",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "computed-property-spacing",
        "description": "enforce consistent spacing inside computed property brackets",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "consistent-this",
        "description": "enforce consistent naming when capturing the current execution context",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "eol-last",
        "description": "enforce at least one newline at the end of files",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "func-call-spacing",
        "description": "require or disallow spacing between function identifiers and their invocations",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "func-names",
        "description": "require or disallow named function expressions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "func-style",
        "description": "enforce the consistent use of either function declarations or expressions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "id-blacklist",
        "description": "disallow specified identifiers",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "id-length",
        "description": "enforce minimum and maximum identifier lengths",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "id-match",
        "description": "require identifiers to match a specified regular expression",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "indent",
        "description": "enforce consistent indentation",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "jsx-quotes",
        "description": "enforce the consistent use of either double or single quotes in JSX attributes",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "key-spacing",
        "description": "enforce consistent spacing between keys and values in object literal properties",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "keyword-spacing",
        "description": "enforce consistent spacing before and after keywords",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "linebreak-style",
        "description": "enforce consistent linebreak style",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "lines-around-comment",
        "description": "require empty lines around comments",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "max-depth",
        "description": "enforce a maximum depth that blocks can be nested",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "max-len",
        "description": "enforce a maximum line length",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "max-lines",
        "description": "enforce a maximum number of lines per file",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "max-nested-callbacks",
        "description": "enforce a maximum depth that callbacks can be nested",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "max-params",
        "description": "enforce a maximum number of parameters in function definitions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "max-statements-per-line",
        "description": "enforce a maximum number of statements allowed per line",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "max-statements",
        "description": "enforce a maximum number of statements allowed in function blocks",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "multiline-ternary",
        "description": "enforce newlines between operands of ternary expressions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "new-cap",
        "description": "require constructor function names to begin with a capital letter",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "new-parens",
        "description": "require parentheses when invoking a constructor with no arguments",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "newline-after-var",
        "description": "require or disallow an empty line after var declarations",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "newline-before-return",
        "description": "require an empty line before return statements",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "newline-per-chained-call",
        "description": "require a newline after each call in a method chain",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-array-constructor",
        "description": "disallow Array constructors",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-bitwise",
        "description": "disallow bitwise operators",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-continue",
        "description": "disallow continue statements",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-inline-comments",
        "description": "disallow inline comments after code",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-lonely-if",
        "description": "disallow if statements as the only statement in else blocks",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-mixed-operators",
        "description": "disallow mixed binary operators",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-mixed-spaces-and-tabs",
        "description": "disallow mixed spaces and tabs for indentation",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-multiple-empty-lines",
        "description": "disallow multiple empty lines",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "no-negated-condition",
        "description": "disallow negated conditions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-nested-ternary",
        "description": "disallow nested ternary expressions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-new-object",
        "description": "disallow Object constructors",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-plusplus",
        "description": "disallow the unary operators ++ and --",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-restricted-syntax",
        "description": "disallow specified syntax",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-tabs",
        "description": "disallow tabs in file",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-ternary",
        "description": "disallow ternary operators",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-trailing-spaces",
        "description": "disallow trailing whitespace at the end of lines",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "no-underscore-dangle",
        "description": "disallow dangling underscores in identifiers",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-unneeded-ternary",
        "description": "disallow ternary operators when simpler alternatives exist",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-whitespace-before-property",
        "description": "disallow whitespace before properties",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "object-curly-newline",
        "description": "enforce consistent line breaks inside braces",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "object-curly-spacing",
        "description": "enforce consistent spacing inside braces",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "object-property-newline",
        "description": "enforce placing object properties on separate lines",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "one-var-declaration-per-line",
        "description": "require or disallow newlines around var declarations",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "one-var",
        "description": "enforce variables to be declared either together or separately in functions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "operator-assignment",
        "description": "require or disallow assignment operator shorthand where possible",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "operator-linebreak",
        "description": "enforce consistent linebreak style for operators",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "padded-blocks",
        "description": "require or disallow padding within blocks",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "quote-props",
        "description": "require quotes around object literal property names",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "quotes",
        "description": "enforce the consistent use of either backticks, double, or single quotes",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "require-jsdoc",
        "description": "require JSDoc comments",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "semi-spacing",
        "description": "enforce consistent spacing before and after semicolons",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "semi",
        "description": "require or disallow semicolons instead of ASI",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "sort-keys",
        "description": "requires object keys to be sorted",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "sort-vars",
        "description": "require variables within the same declaration block to be sorted",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "space-before-blocks",
        "description": "enforce consistent spacing before blocks",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "space-before-function-paren",
        "description": "enforce consistent spacing before function definition opening parenthesis",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "space-in-parens",
        "description": "enforce consistent spacing inside parentheses",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "space-infix-ops",
        "description": "require spacing around operators",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "space-unary-ops",
        "description": "enforce consistent spacing before or after unary operators",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "spaced-comment",
        "description": "enforce consistent spacing after the // or /* in a comment",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "unicode-bom",
        "description": "require or disallow Unicode byte order mark (BOM)",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "wrap-regex",
        "description": "require parenthesis around regex literals",
        "recommended": false,
        "fixable": false
      }
    ]
  },
  {
    "category": "ECMAScript 6",
    "description": "These rules relate to ES6, also known as ES2015",
    "rules": [
      {
        "rule": "arrow-body-style",
        "description": "require braces around arrow function bodies",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "arrow-parens",
        "description": "require parentheses around arrow function arguments",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "arrow-spacing",
        "description": "enforce consistent spacing before and after the arrow in arrow functions",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "constructor-super",
        "description": "require super() calls in constructors",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "generator-star-spacing",
        "description": "enforce consistent spacing around * operators in generator functions",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "no-class-assign",
        "description": "disallow reassigning class members",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-confusing-arrow",
        "description": "disallow arrow functions where they could be confused with comparisons",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-const-assign",
        "description": "disallow reassigning const variables",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-dupe-class-members",
        "description": "disallow duplicate class members",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-duplicate-imports",
        "description": "disallow duplicate module imports",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-new-symbol",
        "description": "disallow new operators with the Symbol object",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-restricted-imports",
        "description": "disallow specified modules when loaded by import",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-this-before-super",
        "description": "disallow this/super before calling super() in constructors",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "no-useless-computed-key",
        "description": "disallow unnecessary computed property keys in object literals",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-useless-constructor",
        "description": "disallow unnecessary constructors",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "no-useless-rename",
        "description": "disallow renaming import, export, and destructured assignments to the same name",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "no-var",
        "description": "require let or const instead of var",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "object-shorthand",
        "description": "require or disallow method and property shorthand syntax for object literals",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "prefer-arrow-callback",
        "description": "require arrow functions as callbacks",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "prefer-const",
        "description": "require const declarations for variables that are never reassigned after declared",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "prefer-reflect",
        "description": "require Reflect methods where applicable",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "prefer-rest-params",
        "description": "require rest parameters instead of arguments",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "prefer-spread",
        "description": "require spread operators instead of .apply()",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "prefer-template",
        "description": "require template literals instead of string concatenation",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "require-yield",
        "description": "require generator functions to contain yield",
        "recommended": true,
        "fixable": false
      },
      {
        "rule": "rest-spread-spacing",
        "description": "enforce spacing between rest and spread operators and their expressions",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "sort-imports",
        "description": "enforce sorted import declarations within modules",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "symbol-description",
        "description": "require symbol descriptions",
        "recommended": false,
        "fixable": false
      },
      {
        "rule": "template-curly-spacing",
        "description": "require or disallow spacing around embedded expressions of template strings",
        "recommended": false,
        "fixable": true
      },
      {
        "rule": "yield-star-spacing",
        "description": "require or disallow spacing around the * in yield* expressions",
        "recommended": false,
        "fixable": true
      }
    ]
  }
];
