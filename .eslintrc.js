module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
