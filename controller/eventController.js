const event = require('../model/event')
const endOfDay = require('date-fns/endOfDay') 
const startOfDay= require('date-fns/startOfDay')


const getEvents = (req,res) =>{
    event.find().then(response => {res.json(response)}).catch(error => {res.json({
        message : 'display error'
    })
})
}


const addEvent = (req,res)=>{
    console.log(req.file)
    let newEvent = new event ({
        title : req.body.title,
        description : req.body.description,
        date : req.body.date,
        address : req.body.address
    })
    if(req.file){
        newEvent.image = req.file.path
    }
    newEvent.save().then(response => {
        res.json(response)
    }).catch(error => {
            res.json({
                error
            })
        })
}

const updateEvent = (req,res) => {
    let updateEvent = {
        title : req.body.title,
        description : req.body.description,
        date : req.body.date,
        address : req.body.address
    }
    if(req.file){
        updateEvent.image = req.file.path
    }
    event.findByIdAndUpdate(req.params.id,{$set:updateEvent}).then( response => { res.json({
        message : 'updated'
    })
    }).catch( error => { res.json({
        message : 'update error'
    })
    })
}

const deleteEvent = (req,res) =>{
    event.findByIdAndRemove(req.params.id).then(response => {
        res.json({
            response
    })
    }).catch(error => {
            res.json({
                message : ' delete error'
            })
        })
}

const getEventsById = (req,res) =>{
    event.findById(req.params.id).then(response => {
        res.json(response)
    }).catch(error => {res.json(error)
    })
}

const getEventsByDate = (req,res) =>{
    //d =new Date().toString()
    console.log(new Date(req.query.date).toString())
    event.find(/*req.params.d*/{ //query today up to tonight
        date : {
            $gte: startOfDay(new Date(req.query.date)),
            $lte: endOfDay(new Date(req.query.date))
          }
    }).then(response => {
        res.json(response)
    }).catch(error => {res.json(error)
    })
}


module.exports = {getEvents,addEvent,updateEvent,deleteEvent,getEventsById,getEventsByDate}