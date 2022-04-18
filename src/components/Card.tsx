import { Box, Text } from "@chakra-ui/react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}


export function Card({title, children}: CardProps) {
  return (
    <Box
      p="8"
      bg="gray.800"
      borderRadius={8}
      pb="4"
    >
      <Text fontSize="lg" mb="4">{title}</Text>
      {children}
    </Box>
  );
}