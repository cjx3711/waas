/**
 * This file contains all the gag controllers.
 */

module.exports = {
  word(req, res) {
    res.status(201).send({
      word: req.params.text
    })
  },
  trim(req, res) {
    res.status(201).send({
      word: req.params.text
    })
  },
  upcase(req, res) {
    res.status(201).send({
      word: req.params.text
    })
  },
  downcase(req, res) {
    res.status(201).send({
      word: req.params.text
    })
  },
  camelcase(req, res) {
    res.status(201).send({
      word: req.params.text
    })
  },
  snakecase(req, res) {
    res.status(201).send({
      word: req.params.text
    })
  },

}
