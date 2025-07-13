module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["update", "fix", "docs", "test", "add", "refacor", "remove"],
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "scope-empty": [2, "always"],
    "subject-empty": [2, "never"],
    "subject-case": [2, "always", "lower-case"],
  },
};
