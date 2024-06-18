const express = require('express')
const router = express.Router()
const {getAllActors, postActors, putActors, deletActor} = require('../controllers/controller')


//welcome to my API
router.get('/', (req,res) =>{
    
    res.send("welcome to my rest API")
})

//get all actors
router.get('/actors',  getAllActors)

//get specific user
router.get('/actors/:id', getSpecificActor)


//post actors
router.post('/actors',  postActors)


//put or update actor
router.put('/:id', putActors)


//delete actor
router.delete('/:id', deletActor)




module.exports = router
