require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;
const OMDB_API_KEY = process.env.OMDB_API_KEY;

module.exports={
    MONGODB_URL,
    PORT,
    OMDB_API_KEY
}