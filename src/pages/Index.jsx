import { Container, Text, VStack, Box, Flex, Spacer, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={color} minHeight="100vh">
      <Flex as="nav" bg={bg} p={4} boxShadow="md">
        <Box>
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Button onClick={toggleColorMode} leftIcon={colorMode === "light" ? <FaMoon /> : <FaSun />}>
          {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </Flex>
      <Container centerContent maxW="container.md" height="calc(100vh - 64px)" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;