import {
  merge,
  camelCase
} from 'lodash';

class Config {
  constructor() {
    const config = require('./default.json'),
          defaultConfig = config.default,
          environment = process.env.NODE_ENV || 'development',
          environmentConfig = config[environment],
          finalConfig = merge(defaultConfig, environmentConfig);

    this.cfg = finalConfig;
  }

  read() {
    return this.camelizeKeys(this.cfg);
  }

  camelizeKeys(obj) {
    if (Array.isArray(obj)) {
      return obj.map(v => this.camelizeKeys(v));
    } else if (obj !== null && obj.constructor === Object) {
      return Object.keys(obj).reduce(
        (result, key) => ({
          ...result,
          [camelCase(key)]: this.camelizeKeys(obj[key]),
        }),
        {},
      );
    }
    return obj;
  }
}

const singleton = new Config();

export default singleton;