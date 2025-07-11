const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);
// mongoose.connect('mongodb+srv://root:mongodbpassword@trazosjul25.ajwrkbn.mongodb.net/school')