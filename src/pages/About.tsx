import { Box, Container, Heading, Text, Image, Stack, SimpleGrid } from '@chakra-ui/react'

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="orange.50" py={16}>
        <Container maxW="1200px">
          <Stack direction={{ base: 'column', md: 'row' }} gap={8} align="center">
            <Box flex={1}>
              <Heading as="h1" size="2xl" mb={4}>
                Our Story
              </Heading>
              <Text fontSize="lg" mb={4}>
                Welcome to Lepak Santai Seremban, where we bring the authentic flavors of Malaysia to your table.
              </Text>
              <Text fontSize="lg">
                Founded in 2020, our restaurant has been serving the community with traditional Malaysian cuisine,
                creating memorable dining experiences for our valued customers.
              </Text>
            </Box>
            <Box flex={1}>
              <Image
                src="/placeholder-restaurant.jpg"
                alt="Restaurant Interior"
                borderRadius="lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/500x300";
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxW="1200px" py={16}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Our Values
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>
              Authenticity
            </Heading>
            <Text>
              We stay true to traditional Malaysian recipes while adding our unique touch to create
              memorable dining experiences.
            </Text>
          </Box>
          <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>
              Quality
            </Heading>
            <Text>
              We source the finest ingredients and maintain high standards in food preparation
              and service.
            </Text>
          </Box>
          <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>
              Hospitality
            </Heading>
            <Text>
              We treat every guest like family, ensuring a warm and welcoming atmosphere
              for all our customers.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Team Section */}
      <Box bg="gray.50" py={16}>
        <Container maxW="1200px">
          <Heading as="h2" size="xl" mb={8} textAlign="center">
            Meet Our Team
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            <Box textAlign="center">
              <Image
                src="/placeholder-chef.jpg"
                alt="Head Chef"
                borderRadius="full"
                boxSize="200px"
                mx="auto"
                mb={4}
              />
              <Heading as="h3" size="md" mb={2}>
                Chef Ahmad
              </Heading>
              <Text color="gray.600">Head Chef</Text>
            </Box>
            {/* Add more team members as needed */}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
}

export default About 