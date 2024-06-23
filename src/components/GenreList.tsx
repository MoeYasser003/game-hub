import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const skeletons_2 = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ];
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  // if (isLoading) return <Spinner />;
  return (
    <>
      <List>
        {isLoading &&
          skeletons_2.map((skeleton) => (
            <ListItem key={skeleton} paddingY="5px">
              <GenreListSkeleton />
            </ListItem>
          ))}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
