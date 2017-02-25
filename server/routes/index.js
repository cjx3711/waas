const wordsController = require('../controllers').words;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/api/words/createnoun/:word', wordsController.createNoun);
  app.get('/api/words/createverb/:word', wordsController.createVerb);
  app.get('/api/words/:word', wordsController.getType);

  // Setup a default catch-all route that sends back a welcome message in JSON format.
  app.get('*', (req, res) => res.status(404).send('404: Nothing here'));
};
