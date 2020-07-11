const express = require('express')
const apis = require('../apis/index.js')
const router = express.Router()


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})


router.get('/authenticate', function( req, res, next ) {
  req.session.userid = req.query.userid
  req.session.save((err)=>{
    console.log( "session.save was called")
    if( err ){
      console.log( "there was an error:" )
      console.log( err )
    } 
  })
  res.send( 'AUTHENTICATED!' )
})

router.post('/authenticate', function( req, res, next ) {
  req.session.userid = req.query.userid
  req.session.save((err)=>{
    console.log( "session.save was called")
    if( err ){
      console.log( "there was an error:" )
      console.log( err )
    } 
  })
  console.log( `userid is ${req.session.userid}`)
  res.send( 'AUTHENTICATED!' )
})

router.post('/register', function( req, res, next ){
  res.send( 'REGISTERED!' )
})

router.get('/blessings', async function( req, res, next ) {
  console.log( `retriveing blessings for: ${req.session.userid}` )
  if( !req.session.userid ){
    //console.log( req.session )
    // we don't know this user; authenticate!
    res.redirect( '/authenticate' )
  } else {
    res.json( await apis.get_blessings( req.session.userid ) )
  }
})

router.post('/blessings', function( req, res, next ) {
  res.json( apis.add_blessing( req.session.userid, req.body ) )
})

router.put('/blessings', function( req, res, next ) { 
  res.json( apis.update_blessing( req.session.userid, req.body ) )
})

router.delete('/blessings', function( req, res, next ) { 
  res.json( apis.delete_blessings( req.session.userid, req.body ))
})


module.exports = router;
