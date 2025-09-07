import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  reviewId : {
        type : String,
        required : true,
        unique : true
  },
  productId : {
        type : String,
        required : true
  },
  email : {
        type : String,
        required : true
  },
  rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
  },
  comment: {
        type: String,
        required: true
  },
  date : {
        type : Date,
        default : Date.now
  }
  
});

const Review = mongoose.model('Reviews', reviewSchema);
export default Review;
