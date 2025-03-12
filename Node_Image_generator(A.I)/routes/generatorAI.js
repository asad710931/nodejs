const express = require('express')
const router = express.Router()
const { generateImage, generateText } =require('../Controller/openaiController')

router.post('/generateImage',generateImage)
router.post('/generateText',generateText)

console.log('routes connected..')

module.exports = router 