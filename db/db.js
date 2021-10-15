const mongoose = require('mongoose');
const connection = "mongodb+srv://jthurber87:Cheetoh87@cluster0.u3c9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));