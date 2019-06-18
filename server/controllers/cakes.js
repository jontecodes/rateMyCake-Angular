var mongoose = require('mongoose');

// model
require('../models/cake');

var Cake = mongoose.model('Cake');
var Comment = mongoose.model('Comment');

module.exports = {
    index: (req, res) => {
        Cake.find({}, function(err, cake){
            if(err){
                console.log('Index returned error', err);
                res.json({message: 'Index Error', error: err});
            } else {
                res.json({message: 'Success-Index', cakes: cake})
            }
        })
    },
    cake: (req, res) => {
        Cake.find({_id: req.params.id}, (err, cake)=> {
            if(err){
                console.log('Single Cake return error', err);
                res.json({message: 'Error-Single-Cake', error: err});
            } else {
                res.json({message: 'Single-Cake Success', cakes: cake});
            }
        })
    },
    create: (req, res) => {
        Cake.create(req.body, (err, newCake) => {
            if(err){
                console.log('Cake creation error', err);
                res.json({message: 'Cake-Creation Error', error: err});
            } else {
                console.log('Successful Cake Creation');
                res.json({result: newCake});
            }
        })
    },
    commentCreate: (req, res) => {
        console.log('This body is', req.body);
        Comment.create(req.body, (err, newComment) => {
            console.log('This body', req.body);
            if(err){
                console.log('Comment creation error', err);
                // res.json({message: 'Comment-Creation Error', error: err});
            } else {
                Cake.findOneAndUpdate({_id: req.params.id}, {$push: {comments: newComment}}, (err, data) => {
                    if(err){
                        console.log('Error pushing comment/rating to Cake', err);
                        res.json({message: 'Error-Comment-Cake', error: err});
                    } else {
                        console.log('Success adding comment to Cake');
                        res.json({message: 'Successful input of comment', data: data})
                    }
                })
            }
        })
    },
    edit: (req, res) => {
        Cake.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err, updtCake){
            console.log('Updating Cake');
            if(err){
                console.log('Error editing/updating Cake', err);
                res.json({message: 'Cake-Edit Error', error: err});
            } else {
                console.log('Successful Cake Edit');
                res.json({EditResult: updtCake});
            }
        })
    }
}