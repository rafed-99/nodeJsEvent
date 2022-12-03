const eventController = require('../controller/eventController')
const express = require('express')
const router = express.Router()
const upload = require('../middleware/upload')

router.get("/getevents",eventController.getEvents)
router.post("/addevent",upload.single('image'),eventController.addEvent)
router.put('/updateevent/:id',upload.single('image'),eventController.updateEvent)
router.delete('/deleteevent/:id',eventController.deleteEvent)
router.get("/getevent/:id",eventController.getEventsById)
router.get("/getbydate",eventController.getEventsByDate)
module.exports = router