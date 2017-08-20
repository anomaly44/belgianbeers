module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "react/forbid-prop-types": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/no-did-mount-set-state": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0
  },
  "globals": {
    "fetch": false,
    "it": false,
    "describe": false,
    "document": false
  }
};