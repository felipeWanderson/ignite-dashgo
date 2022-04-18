import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import {Notification} from './Notifications'
import { User } from "./User";

const user = {
  name: 'Felipe Leal',
  email: 'felipe.leal@dev.com',
  avatarUrl: 'https://github.com/felipeWanderson.png'
}

export function Profile() {
  return (
    <Flex
    align="center"
    ml="auto"
  >
    <Notification />

    <User user={user} />
  </Flex>
  );
}