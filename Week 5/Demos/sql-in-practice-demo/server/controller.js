require('dotenv').config()
const {CONNECTION_STRING} = process.env

const Sequelize = require('sequelize')
const sequelize = new Sequelize(CONNECTION_STRING)

const userId = 4
const clientId = 3

module.exports = {
    
    getUserInfo: (req, res) => {
        sequelize.query(`select * from cc_clients c
        join cc_users u on c.user_id = u.user_id
        where u.user_id = ${userId};`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    updateUserInfo: (req, res) => {
        let {
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            city,
            state,
            zipCode
        } = req.body


        sequelize.query(`
        update cc_users set first_name = '${firstName}',
        last_name = '${lastName}',
        email = '${email}',
        phone_number = '${phoneNumber}'
        where user_id = ${userId};

        update cc_clients set address = '${address}',
        city = '${city}',
        state = '${state}',
        zip_code = '${zipCode}'
        where user_id = ${userId};
        `)
        .then(() => res.status(200))
        .catch(err => console.log(err))
    }
}