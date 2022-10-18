module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    host: '0.0.0.0',
    public: '0.0.0.0:8080',
    hot: true,
    disableHostCheck: true,
    https: false,
  },
};
