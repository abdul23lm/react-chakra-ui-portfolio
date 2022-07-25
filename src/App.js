import { IconButton} from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { Flex, VStack, Heading } from '@chakra-ui/layout'
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode == "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
          <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Abdul LM</Heading>
      </Flex>
      <IconButton icon={isDark ? <FaSun/> : <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
    </VStack>
  );
}

export default App;
