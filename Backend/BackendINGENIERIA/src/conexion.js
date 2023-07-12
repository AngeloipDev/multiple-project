const {connect} = require("mongoose")

/* "mongodb+srv://database:07JAVQTHo2ZsepcP@cluster0.ivi9k9w.mongodb.net/test" */

const dbConnect = async()=>{
    await connect("mongodb+srv://apptest:IDxHxKJuh24iL1nn@cluster0.qfpzutu.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("conexion correcta a mongodb")
    })
    .catch((error)=>{
        console.log(error)
    })

}

dbConnect()