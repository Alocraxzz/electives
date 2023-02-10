const express = require("express");
const router  = express.Router();

const StudentElectiveController = require("../controllers/StudentElectiveController");

const { asyncCatch } = require("../utils/catch");

router.get("/", asyncCatch(StudentElectiveController.index));

router.post("/", asyncCatch(StudentElectiveController.store));

router.get("/:id", asyncCatch(StudentElectiveController.show));

router.put("/:id", asyncCatch(StudentElectiveController.update));

router.delete("/:id", asyncCatch(StudentElectiveController.destroy));

module.exports = router;