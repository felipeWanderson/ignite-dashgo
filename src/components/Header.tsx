import { Flex } from "@chakra-ui/react";
import {Logo} from './Header/Logo';
import { SearchBox } from './Header/SearchBox';
import {Profile} from "../components/Profile"

export function Header() {
  return (
    <Flex 
      as="header"
      width="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <SearchBox />
      
      <Profile />
     
    </Flex>
  )
}