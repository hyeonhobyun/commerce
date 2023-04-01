const TsconfigPathsPlugin =  require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }

    config.resolve.plugins.push(new TsconfigPathsPlugin({}));

    config.module.rules.push({
      test: /.storybook\/preview.js/,
      resolve: { fullySpecified: false },
    })

    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test.test('.svg'),
    );

    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};
