'use strict';

const fs = require('fs');
const logger = require('./logger');

module.exports = (paths, callback) => {
  logger.log(logger.VERBOSE, `Reading ${paths}`);
  return fs.readFile(paths, (error, data) => {
    if (error) callback(error);
    return callback(null, data.toString('utf8'));
  });
};
