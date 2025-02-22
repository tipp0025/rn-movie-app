import React, { createContext, useState } from "react";
import axios from "axios";

const SearchContext = createContext();

// Create empty array for movies

export const SearchProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const API_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGJlNzc1ZDAxMDE1OWVjNjU3NjE2ZWEzODIyMjhlYyIsIm5iZiI6MTcxMDc5ODMxMC43NzYsInN1YiI6IjY1ZjhiNWU2NmU0NGJmMDFhNDc0Zjg3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o69yHvkHi2L5tYALI1Of6DJfT5bu18GlyA3Q3y4RZvo";

  // Handes API call from search input

  const searchMovies = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
    try {
      const response = await axios.get(url, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching movies", error);
    }
  };

  // Provides relevant data to child components

  return (
    <SearchContext.Provider value={{ movies, searchMovies, setMovies }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
