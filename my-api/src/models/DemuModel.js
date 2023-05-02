const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    Name: {type:String},
    Roll:{type:Number},
    Class:{type:String},
    Remarks:{type:String},
    Adult:{type:Boolean},
    comments:[],
    dob:Date
})