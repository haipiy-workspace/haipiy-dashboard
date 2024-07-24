module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    //   TODO Add Scope Enum Here
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "chore",
        "style",
        "refactor",
        "ci",
        "test",
        "revert",
        "perf",
        "vercel",
      ],
    ],
    "subject-case": [2, "always", "lower-case"], // Enforce Subject
    "scope-empty": [1, "never"], // Disallows empty scope
    "scope-case": [2, "always", "lower-case"], // Enforces lowercase scope
  },
};
