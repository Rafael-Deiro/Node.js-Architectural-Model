'use strict';

const express = require('express');
const User = require('../../models/User');

const httpMessages = {
    validationError: {
        success: false,
        message: "Please insert email and password."
    },
    userSavingError: {
        success: false,
        message: "This email addres is already registered."
    },
    userSavingSuccess: {
        success: true,
        message: "User successfully created!"
    }
}

function registerUser(req, res) {
    let { email, password } = req.body;

    if (!email || !password) {
        res.json(httpMessages.validationError);
    }
    else {
        let newUser = new User({ email: email, password: password });
        
        newUser.new()
        .then((user) => {
            httpMessages.userSavingSuccess.user = user;
            res.json(httpMessages.userSavingSuccess);
        })
        .catch((err) => {
            httpMessages.userSavingError.message = err.message;
            res.json(httpMessages.userSavingError);
        });
    }
}

module.exports = {
    registerUser: registerUser
}