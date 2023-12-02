require('../models/database');
const Register = require("../models/registerschema");
const express = require('express');
const app = express();
exports.registeruser = async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if (password === cpassword) {
            const registerUser = new Register({
                name: req.body.name,
                email: req.body.email,
                password: password,
                confirmpassword: cpassword,
                phone: req.body.phone,
                gender: req.body.gender
            })
            await registerUser.save();
            res.redirect('/login');
        }
        else {
            res.send("password are not matching");
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
}
exports.login = async (req, res) => {
    res.render('login');
}