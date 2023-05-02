const mongoose = require('mongoose')
const DataSchema = mongoose.Schema({
    Name : {type:String, unique:true},
    Roll : {type:Number,
        min:[6,'Min 6 & Max 12 , But Supplied Value is = {VALUE}'],
        max:[12,'Min 6 & Max 12 , But Supplied Value is = {VALUE}']
    },
    MobileNo:{
        type:String,
        validate:{
            //custom validation
            // validator:function (value) {
            //     if(value.length === 11){
            //         return true;
            //     }
            //     else {
            //         return false;
            //     }

            //regex validation more correct way to validate a phone number
                validator:function (value){
                    return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
            },
            message:"Invalid Bangladeshi Mobile Number"
        }
    },
    Class : {type:String, required:true},
    Remarks : {type:String,default:"No Remarks"}
},{versionKey:false})
const StudentsModel = mongoose.model('students', DataSchema);
module.exports = StudentsModel;