var express = require('express');
var router = express.Router();
var _eventOpt = require('./ctl_calendar.js');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// Get Events By GroupId
router.get('/getEventsByGroup/:groupid', _eventOpt.getEventsByGroupId);

// New
router.post('/newEvent', _eventOpt.newEvent);

// Edit
router.put('/editEvent', _eventOpt.editEvent);

// Delete
router.get('/deleteEvent/:eventId', _eventOpt.deleteEvent);

module.exports = router;