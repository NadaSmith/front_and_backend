const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }  
    );
}

async function create(req, res) {
    try {
        const user = await User.create(req.body);

        const token = createJWT(user);

        res.status(200).json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function logIn(req, res) {
    //We need the try catch block here so that if there is an error anywhere in our funcitno, the program keeps going instead of crashing!
    try {
        User.findOne({ email: req.body.email })
            //after the findOne completes, we do this next bit
            .then(foundUser => {
                //important thing to note is that findOne will not error if no user is found, instead it just ets foundUser to undefined. therefere, we have to check if the user was found
                if (foundUser) {
                    //if a user was fgound, we thenneed to compare the password they entered in the login form with the hpassword stored in the database. we do not have to input the salt because the hash
                    bcrypt.compare(req.body.password, foundUser.password, (error, result) => {
                        //if there was an error in the compare, this runs
                        if (error) {
                            console.log(error);
                            res.status(400).json(error);
                            //if there was no error, this runs (important: the password being wrong does not count as an error!)
                        } else {
                            //if the passwords match
                            if (result === true) {
                                //create at token using the info that we found intiially
                                const token = createJWT(foundUser);
                                //sends back a status code of 200 (ok)
                                res.status(200).json(token);
                            }
                        }
                    })
                    //if a user was not found matching the emaill provided
                } else {
                    //sends back a status code 
                    res.status(403).json({ error: 'User not found'})
                }
            })
            
    } catch (error) {
        res.status(400).json({ error });
    }
}
    
function checkToken(req, res) {
    console.log('req.user', req.user);
    res.status(200).json(req.exp);
}

module.exports = { create, logIn, checkToken };