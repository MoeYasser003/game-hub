import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <>
    <Badge paddingX={2} fontSize='14px' borderRadius='4px' colorScheme={color}>{score}</Badge>
    </>
  );
};

export default CriticScore;
