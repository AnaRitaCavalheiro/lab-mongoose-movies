const express = require('express')
const Celebrity = require('../models/Celebrity');
const router  = express.Router();
//const celebrity = require('../models/Celebrity')

router.get('/celebrities', (req, res) => {
  Celebrity.find()
  .then((allCelebsFromMongoDB) => {
    res.render('celebrities', {celebrities: allCelebsFromMongoDB});
  })
  .catch((err) => {
   res.render('celebrities/index', {err}); 
  })
});

router.get('/celebrities/new', (req, res) => {
  Celebrity.find()
  .then((newCelebrity) => {
    res.render('celebrities/new', {celebrity: newCelebrity});
  })
  .catch((err) => {
    res.render('error', {err})
  })
});

router.post('/celebrities/new', (req, res) => {
  let {name, occupation, catchPhrase} = req.body;

  Celebrity.create({
    name,
    occupation,
    catchPhrase
  })
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch((err) => {
    res.render('celebrities/new', {err});
  });
});

router.get('/celebrities/:celebrityId/edit', (req, res) => {
  let celebrityId = req.params.celebrityId;

  Celebrity.findById(celebrityId)
  . then((theCelebritiesFound) => {
    
      res.render("celebrities/edit", {celebrity: theCelebritiesFound});
  })
  .catch((err) => {
    res.render('error', {err});
  })
});

// POST i'm persisting the changes to the database
router.post('/celebrities/:celebrityId/edit', (req, res) =>{
  let celebrityId = req.params.celebrityId;
  let {name, occupation, catchPhrase} = req.body;
  Celebrity.findByIdAndUpdate(celebrityId, {
    name,
    occupation,
    catchPhrase
  })
  .then(() => {
    res.redirect('/celebrities');
  });
});


router.get('/celebrities/:celebrityId', (req, res) => {
  let celebrityId = req.params.celebrityId;

  Celebrity.findById(celebrityId)
  .then((celebritiesFound) => {
    res.render('celebrities/show', {celebrity:celebritiesFound });
  })
  .catch((err) => {
    res.render('error', {err})
  })
});

router.post('/celebrities/:celebrityId/delete', (req, res) => {
  let celebrityId = req.params.celebrityId;

  Celebrity.findByIdAndDelete(celebrityId)
  .then(() => {
    res.redirect('/celebrities');
  })
  .catch((err) => {
    res.render('error', {err})
  })
});


module.exports = router;
