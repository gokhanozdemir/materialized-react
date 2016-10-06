/* eslint-disable */
var config = require('./webpack.config.prod');
// Replace it to match your GitHub project name
config.output.publicPath = '/materialized-react/';
module.exports = config;

