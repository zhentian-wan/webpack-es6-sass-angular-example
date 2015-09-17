/**
 * Created by Answer1215 on 9/17/2015.
 */

var webpack = require('webpack');
var here = require('path-here');

module.exports = {
    context: here('app'),
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: here('dist')
    }
};