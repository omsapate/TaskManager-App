const Task = require('../models/Task')

const createTask = async (req, res) =>{
    var task = await Task.create(req.body)
    res.status(201).json({task})
}

const getAllTasks = async (req, res) =>{
    

}

const getTask = (req, res) =>{
    res.send('get single task')
}

const updateTask = (req, res) =>{
    res.send('update task')
}

const deleteTask = (req, res) =>{
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}