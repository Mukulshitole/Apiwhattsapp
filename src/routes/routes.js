const express = require('express');
const router  = express.Router();
const whatsAppcontroller = require("../controllers/whatsappcontroller");

router   // here we assign api
.get("/", whatsAppcontroller.Verifytoken)
.post("/",whatsAppcontroller.ReceivedMessage)

module.exports = router;