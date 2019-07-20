import path from 'path'

const http = require('http')
const express = require('express')

// process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 3000

const app = express()

app.set('env', process.env.NODE_ENV)
app.use(express.static(path.join(__dirname, 'client')))

// application routes
const setupAppRoutes = require('./middlewares/development')
setupAppRoutes(app)

http.createServer(app).listen(process.env.HTTP_PORT, () => {
    console.log(
        `HTTP server is now running on http://localhost:${
            process.env.HTTP_PORT
        }`
    )
})
