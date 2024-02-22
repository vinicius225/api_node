const mongose = require('mongoose');
const dbUser = '';
const dbPassword = process.env.MONGO_PASSWORD;

const conn = async (r) => {
  const dbConnection = await mongose.connect(
    `mongodb+srv://viniciusguilherme225:${dbPassword}@cluster0.ayfqexd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );
};

module.exports = conn;