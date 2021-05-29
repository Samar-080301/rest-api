const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://samar:12345@cluster0.npglp.mongodb.net/Blazedock_db?retryWrites=true&w=majority',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Sucessful!!");
}).catch((err) =>{
    console.log(err,"\n connection error");
})