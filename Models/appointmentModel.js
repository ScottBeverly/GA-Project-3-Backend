const mongoose = require('../DataBase/connection');

const AppointmentSchema = new mongoose.Schema({
    date: Date,
    dateTime: Date,
    service: String,
    petName: [
        {
            ref: "Pet",
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    comments: String,
    user_id: [
        {
            ref: "User",
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    provider_id: [
        {
            ref: "Provider",
            type: mongoose.Schema.Types.ObjectId
        }
    ],
});

Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;
