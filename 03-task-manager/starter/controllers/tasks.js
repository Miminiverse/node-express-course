const Task = require("../models/Task")
const asyncWrapper = require('../middleware/async')
//Note that the find() method returns a cursor object, which you can iterate over to access the documents that match the query.
const {createCustomError, } = require('../errors/custom-error')

const getAllTasks = asyncWrapper( async (req,res) => {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
})

const createTask = asyncWrapper (async (req,res) => {
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

//findOne and findByID is almost the same. 
// ONly difference findById(undefined) into findOne({ _id: null }) while findOne({ _id: undefined }) return arbitrary documents.
const getTask = asyncWrapper (async (req,res, next) => {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if (!task) {
            console.log(res.statusCode);
            const errorCode = 404
            return next(createCustomError(`No task with id ${taskID} with status ${errorCode}`, errorCode))
        }
        res.status(200).json({task}) }
)


const updateTask = asyncWrapper (async (req,res, next) => {

        const {id: taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
        })
        if (!task) {
            return next(createCustomError(`No task with id ${taskID}`, 404))
        }
        res.status(200).json({task})

})

const deleteTask = asyncWrapper (async (req,res, next) => {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID})
        if (!task) {
            return next(createCustomError(`No task with id ${taskID}`, 404))
        }
        res.status(200).json({task})
})

const editTask = async (req,res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
            overwrite: true,
        })
        if (!task) {
            return res.status(404).json({msg: `No task with id ${taskID}`})
        }
        res.status(200).json({task})
    } catch (err) {
        res.status(500).json({ msg: err})
    }

}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask,
  }