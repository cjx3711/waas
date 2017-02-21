const wordsController = require('../controllers').words;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/api/words/createnoun/:word', wordsController.createNoun);
  app.get('/api/words/createverb/:word', wordsController.createVerb);
  app.get('/api/words/:word', wordsController.getType);
};
