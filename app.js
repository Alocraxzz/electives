const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandler = require('./middleware/errorHandler');

const studentsRouter = require('./routes/students');
const lecturersRouter = require('./routes/lecturers');
const lessonsTypesRouter = require('./routes/lessonsTypes');
const electivesRouter = require('./routes/electives');
const subjectRouter = require('./routes/subjects');
const examsRouter = require('./routes/exams');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/students', studentsRouter);
app.use('/api/lecturers', lecturersRouter);
app.use('/api/lessonstypes', lessonsTypesRouter);
app.use('/api/electives', electivesRouter);
app.use('/api/subjects', subjectRouter);
app.use('/api/exams', examsRouter);

app.use(errorHandler);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
