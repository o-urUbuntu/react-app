module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/o-urUbuntu/gha-react-app",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "build.zip", label: "build" },
          { path: "coverage.zip", label: "coverage" }
        ]
      }
    ]
  ]
};
