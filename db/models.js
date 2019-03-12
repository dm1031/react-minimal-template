const { conn } = require('./conn');
const Sequelize = require('sequelize');

const User = conn.define('users', {
    name: Sequelize.STRING
})

const Thing = conn.define('things', {
    name: {
        type: Sequelize.STRING
    }
})

const Favorite = conn.define('favorites', {
    rank: Sequelize.INTEGER
})

Favorite.belongsTo(User);
Favorite.belongsTo(Thing);
User.hasMany(Favorite);
Thing.hasMany(Favorite);


module.exports = {
    User,
    Thing,
    Favorite
}