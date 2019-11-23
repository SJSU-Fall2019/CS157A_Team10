var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var projectRouter = require('./routes/project')
var milestoneRouter = require('./routes/milestone')
var teamRouter = require('./routes/team')
var reviewRouter = require('./routes/review')
var courseRouter = require('./routes/course')
var cors = require('cors')
var app = express();

app.use(cors())

const corsOptions = {
  origin: true,
  credentials: true
}

app.options('*', cors(corsOptions));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/project', projectRouter);
app.use('/milestone', milestoneRouter);
app.use('/team', teamRouter);
app.use('/review', reviewRouter);
app.use('/course', courseRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Start Backend message

const port = process.env.PORT || 8001
app.listen(8001, () => {
  console.log(`Listenning on port ${port} ......`);
})

module.exports = app;
