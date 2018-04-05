const express = require('express');
const passport = require('passport');
const router = express.Router();
const db = require('../models');
const mustBeLoggedIn = require('../mustBeLoggedIn');
const userController = require('../controllers/userController');
const locationsController = require('../controllers/locationsController');
const eventsController = require('../controllers/eventsController');

// Create new user
router.post('/users', userController.createUser);

// Get current user
router.get('/auth', userController.getUserDetails);

// User authentication
router.post('/auth',passport.authenticate('local'), userController.userLogin);

// User logout
router.delete('/auth', userController.userLogout);

// Create new event
router.post('/events', eventsController.createEvent);

// Get all events
router.get('/events', eventsController.findAll);

// Get events created by current user
router.get('/events', eventsController.getMyEvents);

// Edit an existing event
router.put('/events/:id', eventsController.updateEvent);

// Delete an event
router.delete('/events/:id', eventsController.remove);

// Create new location
router.post('/locations', locationsController.createLocation);

// Get locations created by current user
router.get('/locations', locationsController.getMyLocations);

// Edit an existing location
router.put('/locations/:id', locationsController.updateLocation);

// Delete a location
router.delete('/locations/:id', locationsController.remove);

module.exports = router;

