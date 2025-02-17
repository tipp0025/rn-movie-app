import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RentedContext = createContext();

export const RentedProvider = ({ children }) => {
  const [rentedMovies, setRentedMovies] = useState([]);

  useEffect(() => {
    const loadRentedMovies = async () => {
      const storedMovies = await AsyncStorage.getItem("rentedMovies");
      if (storedMovies) setRentedMovies(JSON.parse(storedMovies));
    };
    loadRentedMovies();
  }, []);

  const rentMovie = async (movie) => {
    const newMovies = [...rentedMovies, movie];
    setRentedMovies(newMovies);
    await AsyncStorage.setItem("rentedMovies", JSON.stringify(newMovies));
  };

  const removeRentedMovie = async (movieId) => {
    const newMovies = rentedMovies.filter((movie) => movie.id !== movieId);
    setRentedMovies(newMovies);
    await AsyncStorage.setItem("rentedMovies", JSON.stringify(newMovies));
  };

  return (
    <RentedContext.Provider
      value={{ rentedMovies, rentMovie, removeRentedMovie }}
    >
      {children}
    </RentedContext.Provider>
  );
};

export default RentedContext;
