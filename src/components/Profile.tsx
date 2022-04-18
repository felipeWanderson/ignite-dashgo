import { Flex } from "@chakra-ui/react";
import {Notification} from './Profile/Notifications'
import { User } from "./Profile/User";

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