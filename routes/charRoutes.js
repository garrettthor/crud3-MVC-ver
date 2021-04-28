const express = require('express')
const router = express.Router()
const charController = require('../controllers/charCtrl')

router.get('/', charController.getChars)

router.post('/createChar', charController.createChar)

router.put('/toggleActiveChar', charController.toggleActiveChar)

router.put('/undoToggleActiveChar', charController.undoToggleActiveChar)

router.delete('/deleteChar', charController.deleteChar)

module.exports = router