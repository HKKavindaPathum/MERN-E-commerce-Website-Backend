import express from "express";
import { createReview, getAllReviews, getProductReviews, deleteReview } from "../controllers/reviewController.js";
const reviewRouter = express.Router();

reviewRouter.post("/:productId", createReview);
reviewRouter.get("/", getAllReviews);
reviewRouter.get("/:productId", getProductReviews);
reviewRouter.delete("/:reviewId", deleteReview);

export default reviewRouter;
