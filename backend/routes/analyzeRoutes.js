const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { analyzeResume } = require("../controllers/analyzeController");

router.use(auth);

router.get("/:resumeId", analyzeResume);

module.exports = router;