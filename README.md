# react-static-plugin-raw-loader

A [React-Static](https://react-static.js.org) plugin that allows importing files as a String.

## Install

```shell
$ npm install react-static-plugin-raw-loader
# or
$ yarn add react-static-plugin-raw-loader
```

## Use

Edit your `static.config.js` , add this plugin like this:

```js
export default {
  // ...
  plugins: [
    // ...
    "react-static-plugin-raw-loader"
  ]
  // ...
};
```

## Dependencies

- [raw-loader](https://github.com/webpack-contrib/raw-loader)

  As you can see from its README, raw-loader has been "deprecated" since Webpack v5 has added support for importing
  asset files (see [asset modules ](https://webpack.js.org/guides/asset-modules/)  ).

  But React-Static are using Webpack v4 at present. So this dependency may become no longer necessary when React-Static
  uses Webpack v5 in the future.

