/* User model */
'use strict';

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
	}, 
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	pic: {
		type: String,
	},
	userType: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
		minlength: 1,
	},
	userGroups: [groupSchema._id]
})

const SuperAdminSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
	}, 
	password: {
		type: String,
		required: true,
		minlength: 6
	},
})

const bindUser = (next) => {
	const user = this; // binds this to User document instance

	// checks to ensure we don't hash password more than once
	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
}

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
UserSchema.pre('save', bindUser)
SuperAdminSchema.pre('save', bindUser)

const findUser = (id, password) => {
	const User = this // binds this to the User model

	// First find the user by their email
	return User.findOne({ _id: id }).then((user) => {
		if (!user) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
		})
	})
}

// A static method on the document model.
// Allows us to find a User document by comparing the hashed password
//  to a given one, for example when logging in.
UserSchema.statics.findByIDPassword = findUser
SuperAdminSchema.statics.findByIDPassword = findUser

// make a model using the User schema
const User = mongoose.model('User', UserSchema)
const SuperAdmin = mongoose.model('SuperAdmin', SuperAdminSchema)
module.exports = { User, SuperAdmin }

