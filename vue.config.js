// eslint-disable-next-line @typescript-eslint/no-var-requires
const version = require('./package.json').version;
process.env.VUE_APP_VERSION = version;

module.exports = {
  transpileDependencies: ['vuetify'],
};
