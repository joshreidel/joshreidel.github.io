module.exports = {

    "env": {
        "browser": true,   // browser global variables.
        "node": false,     // Node.js global variables and Node.js-specific rules.
        "es6": true,        // enable all ECMAScript 6 features except for modules.
        "jquery": true,     // jquery global variables.
        "mocha": false      // adds all of the Mocha testing global variables.
    },

    "extends": "eslint:recommended",

    "parserOptions": {
        "sourceType": "module"
    },

    "ecmaFeatures": {
        "modules": true,
        "spread": true,
        "restParams": true
    },

    // 0 = off, 1 = warn, 2 = error
    "rules": {

        // stylistic rules
        "camelcase": 1,
        'comma-dangle': 1,
        'comma-spacing': 1,
        'comma-style': 1,
        'computed-property-spacing': 1,
        "indent": [
            "error", 4, { "SwitchCase": 1, "outerIIFEBody": 1,
                "FunctionDeclaration": { "parameters": "first" }
            }
        ],
        "linebreak-style": ["off", "windows"],
        "no-trailing-spaces": 1,
        "no-whitespace-before-property": 1,
        //"linebreak-style": [2, "unix"],
        "quotes": ["off", "single"],
        "semi": [1, "always"],
        "space-before-function-paren": [2, {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "never"
        }],
        "space-before-blocks": 1,
        "space-in-parens": ["error", "never"],
        "key-spacing": 1,
        "keyword-spacing": 1,
        "brace-style": [1, "1tbs", { "allowSingleLine": true }],

        // best practices
        "eqeqeq": 1,
        "no-alert": 1,
        "curly": [2, "all"],
        //"vars-on-top": 2,

        // ecmascript 6 rules
        "arrow-spacing": 1,
        "no-var": 0,
        "prefer-const": 0,

        // variables
        "no-undef": 0,
        "no-unused-vars": 1,

        // overrides eslint:recommended
        "no-console": "off"                       // disallow the use of console

    }
};