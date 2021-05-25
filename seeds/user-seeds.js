const { User } = require('../models');

const userData = [
    {
        username: "marty_ballard",
        password: "p@ssword1"
    },
    {
        username: "matthew_brown",
        password: "p@ssword2"
    },
    {
        username: "sean_carter",
        password: "p@ssword3"
    },
    {
        username: "layla_norris",
        password: "p@ssword4"
    },
    {
        username: "patricia_r",
        password: "p@ssword5"
    },
    {
        username: "jada",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;