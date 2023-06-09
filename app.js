const express      = require("express");
const errorHandler = require("./middleware/errorHandler");

const studentsRouter     = require("./routes/students");
const lecturersRouter    = require("./routes/lecturers");
const lessonsTypesRouter = require("./routes/lessonsTypes");
const electivesRouter    = require("./routes/electives");
const subjectRouter      = require("./routes/subjects");
const examsRouter        = require("./routes/exams");
const electiveContract   = require("./routes/electiveContract");
const studentElective    = require("./routes/studet_elective");

const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/students", studentsRouter);
app.use("/api/lecturers", lecturersRouter);
app.use("/api/lessonsTypes", lessonsTypesRouter);
app.use("/api/electives", electivesRouter);
app.use("/api/subjects", subjectRouter);
app.use("/api/exams", examsRouter);
app.use("/api/electiveContract", electiveContract);
app.use("/api/studentElectiveExam", studentElective);
app.use(errorHandler);

module.exports = app;
