const express = require("express")
const router = express.Router()
const authController = require("../Controllers/auth_controller")
const signupSchema = require("../middleware/zod-valid")
const authMiddleware = require("../middleware/auth_mid")
const validate = require('../middleware/valid_mid')

router.route("/").get(authController.home)

router.route("/login").post(authController.login)

router.route("/sign-up").post(validate(signupSchema), authController.register)

router.route("/user").get(authMiddleware, authController.userData)

module.exports = router