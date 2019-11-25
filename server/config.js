module.exports = {
    PORT: process.env.PORT || 8000,
    DB: process.env.DATABASE_URL || 'mongodb+srv://magdalena_a:test123@cluster0-iamgj.mongodb.net/test?retryWrites=true&w=majority' || 'mongodb://localhost:27017/mernapp',
  };
 
  