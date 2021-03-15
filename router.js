// require handlers
const handlers = require('./handlers');


// request router
const router = {
  '': handlers.index,
  ping: handlers.ping,
  game: handlers.game,
};


module.exports = router;
