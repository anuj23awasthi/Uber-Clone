const express = require('express');
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middleware/auth.middleware');

const router = express.Router();

router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
        body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
        body('fullname.lastname').isLength({ min: 3 }).withMessage('Last name must be at least 3 characters long'),
        body('vehicle.vehicleType').isIn(['car', 'motorcycle']).withMessage('Vehicle type must be either car or motorcycle'),
        body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
        body('vehicle.plateNumber').isLength({ min: 3 }).withMessage('Plate number must be at least 3 characters long'),
    ],
    captainController.registerCaptain
);

router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    ],
    captainController.loginCaptain
);

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.post('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;
