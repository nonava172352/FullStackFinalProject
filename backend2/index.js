const express = require('express');
const {json} = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const http = require("http");
const cookieParser = require('cookie-parser');
require('dotenv').config()

let app = express();
const server = http.createServer(app);
app.use(bodyParser.json());  // ให้ app(express) ใช้งานการ parse json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(morgan('dev')); // ให้ app(express) ใช้งานการ morgam module
app.use(cors()); // ให้ app(express) ใช้งานการ cors module
app.use(cookieParser());
const authRouter = require('./routes/auth-routes')
const commentRouter = require('./routes/comment-routes')
const blogRouter = require('./routes/blog-routes')
app.use('/auth', authRouter)
app.use('/comment', commentRouter)
app.use('/blog', blogRouter)
const port = parseInt(process.env.PORT, 10) || 3000
app.use(json());
app.set("port", port)
server.listen(port, function() {
    console.log('Server Listen at http://localhost:'+port);
});