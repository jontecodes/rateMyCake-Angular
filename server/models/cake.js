var mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'Comments must be filled'],
        minlength:[1, 'Comments must be at least 1 characters']
    },
    rating: {
        type: Number,
        required: [true, 'Ratings must be rated 1-5'],
        max: [5, "Ratings can not be higher than 5"],
        min: [1, "Ratings can not be lower than 1"]
    }
}, {timestamps: true})

const CakeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Baker name is required to post a Cake.'],
        min: [3, "Bakers' name must be at least 3 characters"]
    },
    image: {
        type: String,
        required: [true, "Let's see how pretty that cake is! No seriously."]
    },
    comments: [CommentSchema]
}, {timestamps: true})

const Comment = mongoose.model('Comment', CommentSchema);
const Cake = mongoose.model('Cake', CakeSchema);
