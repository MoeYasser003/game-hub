import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10} padding={4}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
          
        ))}

      </SimpleGrid>
    </>
  );
};

export default GameGrid;