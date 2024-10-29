const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGODB_URL, PORT } = require('./config');
const actorRoutes = require('./routes/actors');
const movieRoutes = require('./routes/movies');
const producerRoutes = require('./routes/producers');

// Middlewares
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/actors', actorRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/producers', producerRoutes);

// MongoDB connection
mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`); // Server Started
    });
})
.catch((error) => console.log(error.message));
