'use strict';

const winston = require('winston');

const logger = module.exports = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({ format: winston.format.simple(), level: 'info' }),
  ],
});

logger.ERROR = 'error';
logger.WARN = 'warn';
logger.INFO = 'info';
logger.VERBOSE = 'verbose';
