'use strict';

const router = require('express').Router();

router.get('/', (request, response, next) => {
    response.status(200).send("Hello World!");
});

module.exports = router;