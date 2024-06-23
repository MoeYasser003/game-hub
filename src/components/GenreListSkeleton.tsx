import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <>
      <HStack>
        <Skeleton boxSize="32px" borderRadius={8}></Skeleton>
        <SkeletonText height="30px" width={"70%"} />
      </HStack>
    </>
  );
};

export default GenreListSkeleton;
