const express = require('express');
const router = express.Router()
const userController = require('../../Controllers/userControllers')

router.route('/random').get(userController.getAUser)
router.route("/all").get(userController.getAllUser)
router.route("/save").post(userController.addAUser)
router.route("/update/:id").patch(userController.updateAUser )
router.route("/bulk-update").patch(userController.updateMultipleUser )

module.exports = router;