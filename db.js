const Sequelize = require('sequelize')
const sequelize = new Sequelize('postgres://johntitor@localhost:5432/mydb')

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.')
})
.catch(err => {
    console.error('Unable to connect to the database:', err)
})

const Posts = sequelize.define('posts', {

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    username: {
        type: Sequelize.STRING,
        allowNull: false
    },

    arttext: {
        type: Sequelize.STRING,
        allowNull: false
    },

})

Posts.sync()

module.exports = {sequelize, Posts}