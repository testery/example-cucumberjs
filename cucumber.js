module.exports = {
    default: [
      "first_part/features/**/*.feature",
      "other_part/features/**/*.feature",
      "--require-module ts-node/register",
      "--require first_part/features/**/*.ts",
      "--require other_part/features/**/*.ts",
      "--publish-quiet",
    ].join(" "),
  };
