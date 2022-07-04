let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://MJSN:l0f3i4mIS7T54@cluster0.i7zyg.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
  console.log('Database is connected succesfully');
});

mongoose.connection.on('disconnected', () => {
  console.log('Database is disconnected succesfully');
});

mongoose.connection.on('error', console.error.bind(console, 'connection error: '));
module.exports = mongoose.connection;
