# Lab 3 - Asynchronous Callbacks

**Author**: Kris Sakarias

**Version**: 1.0.0

**Overview**
In this lab, one module reads a text file and is called from another module that iterates through an array of text files, calling the file reader on each one and returning an array of the text from each file.

**Architecture**
* reader.js exports a function that returns a function that reads a text file
* main.js reads an array of text files and calles reader.js on each file to ultimately return a mapped array of the contents of each text file.
* logger.js uses the winston module to create log files of all errors and other important information