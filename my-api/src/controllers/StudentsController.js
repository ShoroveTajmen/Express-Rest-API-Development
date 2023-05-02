const StudentsModel = require('../models/StudentsModel');

//try to build CRUD operation


//c = create
exports.InsertStudent = (req,res) => {
    let reqBody = req.body;

    StudentsModel.create(reqBody, (err, data) => {
        if(err){
            res.status(400).json({status:"fail", data:err})
        }
        else{
            res.status(200).json({status:"success", data:data})
        }
    })
}

// R = Read
exports.ReadStudent = (req, res) => {
    let Query = {};
    let Projection = "Name Roll";
    StudentsModel.find(Query, Projection, (err, data) => {
        if(err){
            res.status(400).json({status: "fail", data:err});
        }
        else{
            res.status(200).json({status: "success", data: data });
        }
    })
}


//U = Update
exports.UpdateStudent = (req,res) => {
    let id = req.params.id;
    let Query = {_id:id};
    let reqBody = req.body;
    StudentsModel.updateOne(Query, reqBody, (err,data) => {
        if(err){
            res.status(400).json({status: "fail", data:err});
        }
        else{
            res.status(200).json({status: "success", data: data });
        }
    })
}

//D = Delete
exports.DeleteStudent = (req,res) => {
    let id = req.params.id;
    let Query = {_id:id};
    StudentsModel.remove(Query,(err,data) => {
        if(err){
            res.status(400).json({status: "fail", data:err});
        }
        else{
            res.status(200).json({status: "success", data: data });
        }
    })
}






















