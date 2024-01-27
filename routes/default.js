const express = require("express")

const defaultController = require("../controller/defaultController")

const router = express.Router()

router.get("/", defaultController.getHome)

module.exports = router
