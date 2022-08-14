module.exports = {
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    "plugin:jest/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "prettier",
    "@typescript-eslint",
    "eslint-comments",
    "jest",
    "promise",
    "unicorn"
  ],
  rules: {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",

    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",

    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": "off",

    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true }
    ],

    // Allow most functions to rely on type inference. If the function is exported, then `@typescript-eslint/explicit-module-boundary-types` will ensure it's typed.
    "@typescript-eslint/explicit-function-return-type": "off",

    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true }
    ],

    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",

    // Airbnb prefers forEach
    "unicorn/no-array-for-each": "off",

    // It's not accurate in the monorepo style
    "import/no-extraneous-dependencies": "off",

    "prettier/prettier": "error"

    // "no-restricted-syntax": [
    //   "error",
    //   "ForInStatement",
    //   "LabeledStatement",
    //   "WithStatement"
    // ],
  },
  parserOptions: {
    project: "./tsconfig.json"
  },
  // overrides: [
  //   {
  //     files: ["*.js"],
  //     rules: {
  //       // Allow CJS until ESM support improves
  //       "@typescript-eslint/no-var-requires": "off",
  //       "unicorn/prefer-module": "off"
  //     }
  //   }
  // ],
  env: {
    node: true,
    browser: true,
    jest: true
  }
}
