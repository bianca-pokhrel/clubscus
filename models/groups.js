/* User model */
'use strict';

const { UserSchema }  = require('user.js')
const { PostSchema } = require('posts.js')

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const GroupSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3
	},
    banner: {
        type: String,
        required: true,
    },
    officiated: {
        type: Boolean
    },
    members: [UserSchema._id], 
    reqMembers: [UserSchema._id],
	posts: [PostSchema._id],
	admin: {
		type: UserSchema._id,
		required: true,
	},
})

const findGroup = (id) => {
	const Group = this // binds this to the User model

	// First find the user by their email
	return Group.findOne({ _id: id }).then((group) => {
		if (!group) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return group;
	})
}

GroupSchema.statics.findByID = findGroup

const Group = mongoose.model('Group', GroupSchema)
module.exports = { Group }

