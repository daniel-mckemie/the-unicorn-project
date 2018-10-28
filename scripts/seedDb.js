const {
  User, Item, Size, db,
} = require('../models');
const {
  users, items, sizes,
} = require('../data');


(async () => {
  // Insert users
  await User.bulkCreate(users.map(
    ([email, password]) => ({ email, password }),
  ));

  // Insert sizes
  await Size.bulkCreate(sizes.map(([name, price]) => ({ name, price })));

  // Insert items
  await Item.bulkCreate(items.map(([name]) => ({ name })));

  db.close();
})();
