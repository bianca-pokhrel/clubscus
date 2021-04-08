/* User model */
'use strict';

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
    },
    links: [mongoose.Types.ObjectId],
    description: {
        type: String
    },
    founder: {
        type: mongoose.Types.ObjectId
    },
    created_on: {
        type: String
    },
    aboutUs: {
        type: String,
        required: true,
        minlength: 5
    },
    officiated: {
        type: Boolean
    },
    members: [mongoose.Types.ObjectId],
    reqMembers: [mongoose.Types.ObjectId],
	posts: [mongoose.Types.ObjectId],
	admin: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
})


const findGroup = (id) => {
    // const Group = this // binds this to the User model

    // First find the user by their email
    return Group.findOne({ _id: id }).then((group) => {
        if (!group) {
            return Promise.reject()  // a rejected promise
        }
        // if the user exists, make sure their password is correct
        return group;
    })
}

const findGroupBasic = (id) => {
    // const Group = this // binds this to the User model

    // First find the user by their email
    return Group.findOne({ _id: id }).then((group) => {
        if (!group) {
            return Promise.reject()  // a rejected promise
        }
        // if the user exists, make sure their password is correct
        return({
            name: group.name,
            description: group.description
        })
    })
}

GroupSchema.statics.findById = findGroup
GroupSchema.statics.findByIdBasic = findGroupBasic

const Group = mongoose.model('Group', GroupSchema)
//const Link = mongoose.model('Link', LinksSchema)
module.exports = { Group }

