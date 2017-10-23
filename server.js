var express = require('express')  
var webpack = require('webpack')  
var path = require('path')
var webpackDevMiddleware = require('webpack-dev-middleware')  
var webpackHotMiddleware = require('webpack-hot-middleware')  
var config = require('./webpack.config')
var cors = require('cors')

const app = express()
app.use(express.static(__dirname));

let c = 0;

app.get('/inc', (req,res) => {
	res.send((c++).toString())
})

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname + '/index.html'));
})

const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {  
    publicPath: config.output.publicPath,  
    stats: {colors: true}
}))

app.use(webpackHotMiddleware(compiler, {  
    log: console.log 
}))

app.use(cors())

const server = app.listen(3000, () => {
	console.log("server is ready!")
})