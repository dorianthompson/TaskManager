const getAllTasks = (req,res) => {
    res.send('get all task');
}

const createTasks = (req,res) => {
    res.send('create task');
}

const getTask = (req,res) => {
    res.send('get single task');
}

const updateTask = (req,res) => {
    res.send('update single task');
}

const deleteTask = (req,res) => {
    res.send('delete single task');
}


module.exports = {
    getAllTasks,
    createTasks,
    getTask,
    updateTask,
    deleteTask
}