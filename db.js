const mongoose = require('mongoose');


const dbURi = 'mongodb+srv://joaomarciogodoy:Aa40028922@conferenciadejovens.8bn5hsv.mongodb.net/conferencia_jovem?retryWrites=true&w=majority&appName=conferenciadejovens'

module.exports = () => { return mongoose.connect(dbURi) };