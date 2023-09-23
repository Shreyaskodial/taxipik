const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Schema or document structure
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

// Hashing password to secure
UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcryptjs.hash(this.password, 10);
    }
    next();
});

// Generate tokens to verify user
UserSchema.methods.generateToken = async function () {
    try {
        const generateToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: generateToken });
        await this.save();
        return generateToken;
    } catch (error) {
        console.log(error);
    }
};

// Create model
const User = mongoose.model('User', UserSchema);

module.exports = User;
