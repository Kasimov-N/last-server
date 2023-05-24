const {model, Schema} = require('mongoose')

module.exports = model('ucer', new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    password: String,
    subject: String,
    status: {
        type: String,
        enum: ['student', 'teacher'],
        default: 'student'
    },
    ParentsPhoneNumber: {
        mother: Number,
        father: Number
    },
    group: [
        {
            title: String,
            day: {
                type: String,
                enum: ['toq','juft'],
                default: 'toq',
            },
            time: {
                type: String,
                required: true
            },
            students:{
                type: [Schema.Types.ObjectId],
                ref: 'student'
            }
        }
    ],
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