const { User } = require('../models');

const userData = [
    {
        username: "marty_ballard",
        twitter: "martyb",
        github: "martyb",
        email: "marty_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matthew_brown",
        twitter: "matthewb",
        github: "matthewb",
        email: "matthew_b@rowngmail.com",
        password: "p@ssword2"
    },
    {
        username: "sean_carter",
        twitter: "seanc",
        github: "seanc",
        email: "sean_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "layla_norris",
        twitter: "laylanorris",
        github: "laylanorris",
        email: "layla_n@gmail.com",
        password: "p@ssword4"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;