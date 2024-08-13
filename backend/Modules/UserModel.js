const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    LangName: {
        type: String,
        required: true
    },
    GitLink: {
        type: String,
        required: true,
        match: [
            /^(ftp|http|https):\/\/[^ "]+$/,
            'Please fill a valid URL'
        ]
    },
    CreateDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("Project", ProjectSchema);
