const Noun = require('../models').Noun
const Verb = require('../models').Verb

module.exports = {
  createNoun(req, res) {
    return Noun
      .create({
        word: req.params.word,
      })
      .then(noun => res.status(201).send(noun))
      .catch(error => res.status(400).send(error));
  },
  createVerb(req, res) {
    return Verb
      .create({
        word: req.params.word,
      })
      .then(verb => res.status(201).send(verb))
      .catch(error => res.status(400).send(error));
  },
  getType(req, res) {
    console.log(req.params.word);
    var count = 0;
    function callback(type) {
      count++;
      if ( type == 'verb' ) {
        res.status(201).send("Verb");
      } else if ( type == 'noun' ) {
        res.status(201).send("Noun");
      } else if ( count == 2 ) {
        res.status(201).send("Not found");
      }
    }
    Verb.count(
      { where: {
        word: req.params.word
      }}
    ).then( function(c) {
      callback(c>0?'verb':null);
    });
    Noun.count(
      { where: {
        word: req.params.word
      }}
    ).then( function(c) {
      callback(c>0?'noun':null);
    });
    // return Verb
    //   .create({
    //     word: "Test",
    //   })
    //   .then(verb => res.status(201).send(verb))
    //   .catch(error => res.status(400).send(error));
  }
}
