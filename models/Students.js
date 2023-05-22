const {model, Schema} = require('mongoose')

module.exports = model('student', new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    ParentsPhoneNumber: {
        mother: Number,
        father: Number
    },
    status: {
        type: String,
        default: 'student'
    },
    password: String,
    totalScore: {
        type: Number,
        default: 0
    },
    attendance: [
        {
            status: {
                type: Boolean,
                default: false
            },
            date: {
                type: Date,
                default: Date.now()
            },
            reason: String,
            score: {
                type: Number,
                default: 0
            }
        }
    ]
},  { timestamps: true }))