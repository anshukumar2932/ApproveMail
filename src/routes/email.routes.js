const express = require("express");
const router = express.Router();

const emailController = require("../controllers/email.controller");

router.post("/", emailController.createEmail);
router.post("/:id/request-approval", emailController.requestApproval);
router.post("/:id/approve", emailController.approveEmail);

module.exports = router;