var webpack = require('webpack');
var path = require('path');

module.exports = {
//  entry: path.resolve(__dirname, './entry.js'),
//  output: {
//      path: path.resolve(__dirname, './'),
//      filename: 'bundle.js',
//  },
    devServer: {  
        //其实很简单的，只要配置这个参数就可以了  
        proxy: {  
            '/api/*': {  
                target: 'http://datainfo.duapp.com',  
                secure: false  
            }  
        }  
    }
};