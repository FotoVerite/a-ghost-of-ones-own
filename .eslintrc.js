module.exports = {
  root: true,
  extends: '@react-native-community',
  "rules": {
    "no-inline-styles/no-inline-styles": 0
  },
  rules: {
    "react-native/no-inline-styles": 0,
    "prettier/prettier": ["error", {
      "no-inline-styles": false
    }],  
}
};
