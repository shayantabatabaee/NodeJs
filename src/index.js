'use strict';
const express = require('express');
const app = express();

app.listen("8080");
app.use(express.json());

app.use(require('./routes'));

app.use((request, response, next) => {
    let error = new Error("Service Not Found");
    error.status = 404;
    next(error);
});

app.use((error, request, response, next) => {
    let err;
    if (error.status) {
        err = {'error': {message: error.message}};
    } else {
        err = {'error': 'General error occurred in server'}
    }
    response.status(error.status || 500).json(err);
});