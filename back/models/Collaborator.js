const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collaboratorSchema = Schema({
    name : {type: String, required: true},
    surnames : {type: String, required: true},
    email : {type: String, required: true},
    fullName : {type: String, required: true},
    phone : {type: String, required: false},
    role : {type: String, required: true},
    genre : {type: String, required: true},
    number_document : {type: String, required: false},
    password : {type: String, required: true},
    condition : {type: Boolean, required: true, default: true},
    country : {type: String, required: false}
})

module.exports = mongoose.model('collaborator', collaboratorSchema)
