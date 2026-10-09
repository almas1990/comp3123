const express = require('express');
const routerUser = express.Router();
const users = require('../user.json');

/*
- Return all details from user.json file to client as JSON format
*/
routerUser.get('/profile', (req, res) => {
    res.json(users);
});

/*
- Accept username and password as JSON body parameters
- Read user data from user.json
- Validate username and password
*/
routerUser.post('/login', (req, res) => {
    const { username, password } = req.body || {};

    const user = users;

    // Check username
    if (user.username !== username) {
        return res.json({
            status: false,
            message: "User Name is invalid"
        });
    }

    // Check password
    if (user.password !== password) {
        return res.json({
            status: false,
            message: "Password is invalid"
        });
    }

    // Valid username and password
    return res.json({
        status: true,
        message: "User Is valid"
    });
});

/*
- Accept username as a parameter
- Return logout message in HTML format
*/
routerUser.get('/logout/:username', (req, res) => {
    const username = req.params.username;

    res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = routerUser;