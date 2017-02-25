const wordsController = require('../controllers').words;
const gagController = require('../controllers').gag;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/api/words/createnoun/:word', wordsController.createNoun);
  app.get('/api/words/createverb/:word', wordsController.createVerb);
  app.get('/api/words/:word', wordsController.getType);

  // Gag API
  app.get('/word/:text', gagController.word);
  app.get('/strip/:text', gagController.trim);
  app.get('/trim/:text', gagController.trim);
  app.get('/upcase/:text', gagController.upcase);
  app.get('/uppercase/:text', gagController.upcase);
  app.get('/downcase/:text', gagController.downcase);
  app.get('/lowercase/:text', gagController.downcase);
  app.get('/lowcase/:text', gagController.downcase);
  app.get('/camelcase/:text', gagController.camelcase);
  app.get('/camel/:text', gagController.camelcase);
  app.get('/snakecase/:text', gagController.snakecase);
  app.get('/snake/:text', gagController.snakecase);

  // Setup a default catch-all route that sends back a welcome message in JSON format.
  app.get('*', (req, res) => res.status(404).send('404: Nothing here'));
};
