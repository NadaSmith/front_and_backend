const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = reqire('')

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 8,
        required: true
    }
} {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre('save', async function(next){
    if (!this.isModified('password'))
    return next();

})

module.exports = mongoose.model('User', userSchema)