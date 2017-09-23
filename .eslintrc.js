module.exports = {
    env: {
      node: true,
      mocha: true,
      es6: true,
    },
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
    },
    'extends': [
      "eslint:recommended",
      "airbnb-base",
    ],
    'rules' : {
      'indent': ['error', 'tab', {
        // MemberExpression: 0,
        SwitchCase: 1,
        FunctionDeclaration: {body: 1, parameters: 1},
        CallExpression: {arguments: 1},
        ArrayExpression: 1,
        ObjectExpression: 1,
      }],
      'no-tabs': 'off',
  
      'arrow-parens': ['warn', 'as-needed'],
      'arrow-spacing': ['error', {
        'before': false,
        'after': true,
      }],
      
      'space-before-function-paren' : [ 2, {
        'anonymous' : "always",
        'named' : "never"
      }],
      'no-use-before-define' : [2, "nofunc"],
      'comma-dangle': ['error', 'always-multiline'],
      'import/no-extraneous-dependencies' : ["error", {
        'devDependencies' : true
      }],
      'no-underscore-dangle' : [0],
      'semi': ['error', 'never'],
      'linebreak-style': ['error', (require('os').EOL === '\r\n' ? 'windows' : 'unix')],
      'no-unexpected-multiline': 'error',
      'no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
      }],
    },
  }
  