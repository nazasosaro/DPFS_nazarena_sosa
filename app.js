var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const rememberMiddleware = require("./middlewares/rememberMiddleware");
var logger = require('morgan');
const methodOverride = require("method-override");

// routes
const indexRouter = require('./routes/indexRoute');
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const session = require("express-session");
const usersApiRoutes = require("./routes/api/usersApiRoutes");
const productsApiRoutes = require("./routes/api/productsApiRoutes");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "morecommerce",
    resave: false,
    saveUninitialized: false,
  })
);

// mostrar usuario logueado en todas las vistas
app.use((req, res, next) => {
  res.locals.userLogged = req.session.userLogin || null;
  next();
});


app.use('/', indexRouter);
app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/api/users", usersApiRoutes);
app.use("/api/products", productsApiRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
