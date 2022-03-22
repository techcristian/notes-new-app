const Task = require('../models/Task');

export const renderIndex = async(req, res) => {
    try {
        const tasks = await Task.find().lean();
        console.log(tasks[0]);
        res.render("index", { tasks: tasks });
    } catch (err) {
        console.log(err);
    }
};
export const renderTask = async(req, res) => {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
};
export const renderTaskEdit = async(req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean();
        res.render("edit", { task: task });
    } catch (err) {
        console.log(err);
    }
};
export const editTask = async(req, res) => {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
};
export const deleteTask = async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect("/");
};
export const toggleTask = async(req, res) => {
    const task = await Task.findById(req.params.id);
    task.done = !task.done;
    await task.save();
    console.log(task);
    res.redirect("/");
};
export const aboutMenu = (req, res) => {
    res.render("about");
};