const path = require("path");

const addStyleResource = (rule) => {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/styles/_variables.scss"),
        path.resolve(__dirname, "./src/styles/_mixins.scss"),
      ],
    });
};

module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete("svg");
    const types = [
      "vue-modules",
      "vue",
      "vue-svg-loader",
      "normal-modules",
      "normal",
    ];
    types.forEach((type) =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: "vue-svg-loader",
              options: {
                svgo: {
                  plugins: [
                    { removeDimensions: true },
                    { removeViewBox: false },
                  ],
                },
              },
            },
          ],
        },
      ],
    },
  },
};
