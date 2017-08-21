module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/no-noninteractive-element-interactions": 0
  },
  "globals": {
    "fetch": false,
    "it": false,
    "describe": false,
    "document": false
  }
};