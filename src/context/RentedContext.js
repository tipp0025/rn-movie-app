import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RentedContext = createContext();

// Create empty array for rentedMovies

export const RentedProvider = ({ children }) => {
  const [rentedMovies, setRentedMovies] = useState([]);

  // Loads rented movies if present in AsyncStorage

  useEffect(() => {
    const loadRentedMovies = async () => {
      const storedMovies = await AsyncStorage.getItem("rentedMovies");
      if (storedMovies) setRentedMovies(JSON.parse(storedMovies));
    };
    loadRentedMovies();
  }, []);

  // Adds a movie to rentedMovies via AsyncStorage

  const rentMovie = async (movie) => {
    const newMovies = [...rentedMovies, movie];
    setRentedMovies(newMovies);
    await AsyncStorage.setItem("rentedMovies", JSON.stringify(newMovies));
  };

  // Removes a movie from rentedMovies via AsyncStorage

  const removeRentedMovie = async (movieId) => {
    const newMovies = rentedMovies.filter((movie) => movie.id !== movieId);
    setRentedMovies(newMovies);
    await AsyncStorage.setItem("rentedMovies", JSON.stringify(newMovies));
  };

  // Provides relevant data to child components

  return (
    <RentedContext.Provider
      value={{ rentedMovies, rentMovie, removeRentedMovie }}
    >
      {children}
    </RentedContext.Provider>
  );
};

export default RentedContext;
