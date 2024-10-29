require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;
const IMDB_API_KEY = process.env.IMDB_API_KEY;

module.exports={
    MONGODB_URL,
    PORT,
    IMDB_API_KEY
}