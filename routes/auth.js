const express = require('express')
const router = express.Router();

// @route     GET api/auth **we hit this end-point and enter this file**
// @desc      Get logged in user
// @access    Private

router.get('/', (req, res) => {
    res.send('Get logged in user');
});

// @route     POST api/auth  **we hit this end-point and enter this file**
// @desc      Auth user & get token
// @access    Public
router.post('/', (req, res) => {
    res.send('Log in user');
});

module.exports = router;