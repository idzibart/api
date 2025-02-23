import express from "express";
import {
  addToWatchlist,
  getWatchedMovies,
  isOnWatchlist,
  removeFromWatchlist,
} from "../controllers/watchlist.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/movie", verifyToken, addToWatchlist);
router.get("/movie/:imdbID", verifyToken, isOnWatchlist);
router.delete("/movie/:imdbID", verifyToken, removeFromWatchlist);
router.get("/movies", verifyToken, getWatchedMovies);

export default router;
