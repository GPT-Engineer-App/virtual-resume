import { Box, Flex, Heading, Text, Image, Link, VStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={5}>
      <Box maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
        <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ2NjcxODd8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="150px" mx="auto" alt="Profile Image" />
        <VStack spacing={4} align="center" my={5}>
          <Heading as="h1" size="xl">
            John Doe
          </Heading>
          <Text fontSize="lg">Software Engineer | Web Developer</Text>
        </VStack>
        <Text textAlign="center" px={3}>
          Welcome to my personal website! I am a passionate software engineer with expertise in building scalable web applications. Feel free to connect with me or check out my projects.
        </Text>
        <Flex justify="center" mt={5}>
          <Link href="https://github.com/johndoe" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" m={1} />
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" m={1} />
          </Link>
          <Link href="mailto:johndoe@example.com">
            <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" m={1} />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;
