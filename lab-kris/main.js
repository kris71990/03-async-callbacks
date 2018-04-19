'use strict';

const fileReader = require('./lib/reader');
const logger = require('./lib/logger');

const lorem1 = `${__dirname}/data/lorem1.txt`;
const lorem2 = `${__dirname}/data/lorem2.txt`;
const lorem3 = `${__dirname}/data/lorem3.txt`;

const files = [lorem1, lorem2, lorem3];
const arr = [];

const readArray = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }

  const currentPath = fileArray[currentIndex];
  try {
    return fileReader(currentPath, (error, data) => {
      if (error) {
        logger.log(logger.ERROR, error);
      }
      arr.push(data);
      readArray(fileArray, currentIndex + 1, callback);
    });
  } catch (error) {
    logger.log(logger.ERROR, error);
  }
  return undefined;
};

readArray(files, 0, () => {
  logger.log(logger.INFO, 'Text successfully mapped to array');
  logger.log(logger.INFO, arr);
  return arr;
});
