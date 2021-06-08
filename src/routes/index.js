const express = require("express"), router = express.Router(), controller = require("../controllers/index");

router.get("/", controller.index)
router.get("/second", controller.second)
router.get("/third", controller.third);

module.exports = router;