/**
 * This file contains all the gag controllers.
 */

function sendWord(req, res, word) {
  var contype = req.headers['content-type'];
  if (!contype) {
    res.status(200).send({
      word: word
    })
  } else if (contype.indexOf('text/html') == 0 ) {
    res.status(200).send('<h1>Word</h1><p>'+word+"</p>");
  } else if ( contype.indexOf('text/plain') == 0) {
    res.status(200).send(word);
  } else if (contype.indexOf('application/json') == 0) {
    res.status(200).send({
      word: word
    })
  } else {
    res.status(200).send({
      word: word
    })
  }
}
module.exports = {
  word(req, res) {
    var word = req.params.text;
    sendWord(req, res, word);
  },
  trim(req, res) {
    var word = req.params.text.trim();
    sendWord(req, res, word);
  },
  upcase(req, res) {
    var word = req.params.text.toUpperCase();
    sendWord(req, res, word);
  },
  downcase(req, res) {
    var word = req.params.text.toLowerCase();
    sendWord(req, res, word);
  },
  camelcase(req, res) {
    var word = req.params.text;
    word = word.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
    sendWord(req, res, word);
  },
  snakecase(req, res) {
    var word = req.params.text.trim();
    word = word.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
    word = word.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
    sendWord(req, res, word);
  },

}
