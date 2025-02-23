import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.OMDB_API_KEY;

// MOVIES LIST
export const searchMovie = async (req, res) => {
  const { title } = req.query;

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`
    );

    res.status(200).json(response.data.Search);
    // console.log(response.data.Search)
  } catch (error) {
    res.status(500).json({ message: "Error fetching movies data", error });
  }
};

// MOVIE INFO
export const movieInfo = async (req, res) => {
  const { imdbID } = req.params;

  if (!imdbID) {
    return res.status(400).json({ message: "imdbID is required" });
  }

  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching movie details", error });
  }
};
