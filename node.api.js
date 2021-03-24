exports["default"] = function () {
  return (
    {
      webpack: function (config) {
        config.module.rules[0].oneOf.unshift({
          test: /\.(txt|md)$/,
          use: 'raw-loader',
          // type: 'asset/source', // Will support this in webpack v5
        });
        return config;
      }
    }
  )
};
