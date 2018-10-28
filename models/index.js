require('dotenv').config();

const Sequelize = require('sequelize')

Sequelize.Promise = global.Promise;

const db = new Sequelize(
    process.env.DATABASE_URL, 
    {
        underscored: true,
        returning: true,
    });

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING(1024),
    allowNull: false,
    field: 'item_name',
  },
});

const Size =  db.define('size', {
	name: {
		type: Sequelize.STRING(256),
		allowNull: false,
		unique: true
	},

	price: {
		type: Sequelize.FLOAT,
		allowNull: false,
	}
});

const User = db.define('user', {
	email: {
		type: Sequelize.STRING(512),
		required: true
	},
	password: {
		type: Sequelize.STRING(64),
		required: true
	},
});

User.belongsToMany(Item, { as: 'favoriteItems', through: 'favorite_items' });
Item.belongsToMany(User, { through: 'favorite_items' });

Size.belongsToMany(Item, {through: 'item_sizes'})
Item.belongsToMany(Size, {through: 'item_sizes'})

module.exports = {
  Item,
  Size,
  User,
  db,
};







