module.exports = {
  "*.{jsx,ts,tsx}": [
    "prettier --write --ignore-unknown --cache",
    "eslint --quiet --fix --cache",
    // "vitest related"
  ],
};
