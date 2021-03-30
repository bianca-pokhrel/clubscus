/* User model */
'use strict';

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const { ObjectID } = require('bson');

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
	content: {
		type: String,
		required: true,
		minlength: 1
	},
    image: String,
    date: {
        type: String,
        required: true
    },
    likes: {
        type: [mongoose.Types.ObjectId]
    },
    comments: [mongoose.Types.ObjectId], 
})

const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId
    },
    content:{
        type: String,
        required: true,
        minlength: 1
    },
    date:{
        type: String
    }
})

const findPost = (id) => {
	const Post = this // binds this to the User model

	// First find the user by their email
	return Post.findOne({ _id: id }).then((post) => {
		if (!post) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return post;
	})
}
const findComment = (id) => {
	const Comment = this // binds this to the User model

	// First find the user by their email
	return Comment.findOne({ _id: id }).then((comment) => {
		if (!comment) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return comment;
	})
}

PostSchema.statics.findByID = findPost
CommentSchema.statics.findByID = findComment

const Post = mongoose.model('Post', PostSchema)
const Comment = mongoose.model('Comment', CommentSchema)
module.exports = { Post, Comment }

