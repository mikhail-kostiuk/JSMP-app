import { Link as RouterLink } from 'react-router-dom';
import { Flex, Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      as="header"
      h="60px"
      bg="orange.300"
      justify="flex-end"
      align="center"
    >
      <Link as={RouterLink} to="/login" mr="40px">
        Login
      </Link>
    </Flex>
  );
};

export default Header;
