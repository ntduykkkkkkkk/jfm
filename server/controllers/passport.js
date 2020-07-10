const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

// function to be called while there is a new sign/signup 
// We are using passport local signin/signup strategies for our app

module.exports = function(passport, auth) {
    var Auth = auth;
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallBack: true
        }, function (req, email, password, done) {
            console.log('Signup for - ', email)
            var generateHash = function(password) {
                return bcrypt.hashSync(passport, bcrypt.genSaltSync(8), null)
            }
            Auth.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                if (user) {
                    return done(null, false, {
                        message: 'The email is already taken'
                    })
                }else {
                    var userPassword = generateHash(password)
                    var data = {
                        email: email,
                        password: userPassword,
                        firstName: req.body.firstname,
                        lastName: req.body.firstname
                    }
                    Auth.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false)
                        }
                        if (newUser) {
                            return done(null, newUser)
                        }
                    })
                }
            })
        }
    ))

    // LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallBack: true
        }, function(req, email, password, done) {
            var Auth = auth
            var isValidPassword = function(userpass, password) {
                return bcrypt.compareSync(password, userpass)
            }
            console.log('Logged to', email)
            Auth.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
                if (!user) {
                    return done(null, false, {
                        message: 'Email does not exist'
                    })
                }

                if (!isValidPassword(user.password, passport)) {
                    return done(null, false, {
                        message: 'Incorrect password'
                    })
                }
                var userInfo = user.get()
                return done(null, user)
            }).catch(function (err) {
                console.log('Error:', err)
                return done(null, false, {
                    message: 'Something wrong with your signin'
                })
            })
        }
    ))

    // deserialize user 
    passport.deserializeUser(function (id, done) {
        Auth.findByPk(id).then(function (user) {
            if (user) {
                done(null, user.get())
            }else {
                done(user.errors, null)
            }
        })
    })
}