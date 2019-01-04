/**
 * this file exists only to get it working on heroku.
 * when it is no longer needed to the following:
 * add /dist to the .gitignore file
 * remove the start command in package.json
 * remove exress (yarn remove express)
 * delete this file
 */

var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, '/dist')))

var port = process.env.PORT || 5000
app.listen(port)

console.log('server started ' + port)
