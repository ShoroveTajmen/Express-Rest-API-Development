const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    UserName:{type:String},
    TodoSubject:{type:String},
    TodoDescription:{type:String},
    TodoStatus:{type:String},
    TodoCreateDate:{type:String},
    TodoUpdateDate:{type:String},
},{versionKey:false});

const ToDoListModel = mongoose.model('List', DataSchema);
module.exports = ToDoListModel;