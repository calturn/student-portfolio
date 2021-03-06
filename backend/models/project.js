const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    project_name: String,
    project_description: String,
    author: String,
    img_url: String,
    project_url: String
})

module.exports = mongoose.model("Project", projectSchema)