const { db } = require('../models');


(async () => {
  await db.sync({ force: true });
  db.close();
})();
