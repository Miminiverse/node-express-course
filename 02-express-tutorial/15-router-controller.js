let {people} = require('../data')


const getPeople = (req,res) => {
    res.status(200).send({success: true, data: people})
}

const createPerson = (req,res) => {
    const {name} = req.body
    if (!name) {
        res.status(400).send({success: false, msg: "Please provide a name"})
    }
    res.status(200).send({success: true, person: name})
}

const createPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, data: [...people, name] })
  }

const updatePerson = (req,res) => {
    const {id} = req.params
    const {name} = req.body
    const newPerson = people.find((person) => person.id === Number(id))
    if (!newPerson) {
        res.status(400).send({success: false, msg: `Can not find the user with id ${id}`})
    } 
    const newPeople = people.map((person) => {
        if (person.id == Number(id)) {
            person.name = name
        }
        return person
    })
    
    res.status(200).send({success: true, data: newPeople})
}

const deletePerson = (req,res) => {
    const delPerson = people.find((person) => person.id === Number(req.params.id))
    if (!delPerson) {
    res.status(400).send({success: false, msg: `Can not find the user with id ${req.params.id}`})
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    res.status(200).send({success: true, data: newPeople})
}


module.exports = {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson}