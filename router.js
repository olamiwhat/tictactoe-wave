// require handlers
const handlers = require('./handlers');


// Define request router
const router = {
  '': handlers.index,
  ping: handlers.ping,
  game: handlers.game,
};


module.exports = router;
