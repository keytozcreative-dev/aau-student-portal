const express = require('express');
const router = express.Router();
const { loginStudent, getStudentProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/login', loginStudent);
router.get('/profile', protect, getStudentProfile);

module.exports = router;
