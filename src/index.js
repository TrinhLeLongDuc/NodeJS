const path = require('path');
const express = require('express');
const  morgan = require('morgan');
const engine  = require('express-handlebars');
const app = express();
const port = 3000;

// config xem được ảnh /img/12.png
app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan('combined'));
// Template engine
// .hbs là config sử dụng extname
app.engine('hbs', engine( {extname: '.hbs'} ));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname ,"resources", 'views'));

// render các trang

// home page
app.get('/', (req, res) => {
  res.render('home');
})

//news page
app.get('/news', (req, res) => {
  res.render('news');
})

// sử dụng cổng 3000
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})