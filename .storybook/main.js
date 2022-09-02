module.exports = {
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(js|mdx|tsx)"],
};
