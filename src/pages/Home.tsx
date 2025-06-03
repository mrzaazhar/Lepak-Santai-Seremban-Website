import { Box, Container, Heading, Text, Button, Image, Stack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="orange.50" py={20}>
        <Container maxW="1200px">
          <Stack direction={{ base: 'column', md: 'row' }} gap={8} align="center">
            <Box flex={1}>
              <Heading as="h1" size="2xl" mb={4}>
                Welcome to Lepak Santai Seremban
              </Heading>
              <Text fontSize="xl" mb={6}>
                Experience authentic Malaysian cuisine in a relaxed and comfortable atmosphere.
              </Text>
              <RouterLink to="/menu" style={{ textDecoration: 'none' }}>
                <Button
                  colorScheme="orange"
                  size="lg"
                  variant="solid"
                >
                  View Our Menu
                </Button>
              </RouterLink>
            </Box>
            <Box flex={1}>
              <Image
                src="/placeholder-hero.jpg"
                alt="Restaurant Interior"
                borderRadius="lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://via.placeholder.com/500x300";
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Featured Section */}
      <Container maxW="1200px" py={16}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">
          Why Choose Us?
        </Heading>
        <Stack direction={{ base: 'column', md: 'row' }} gap={8}>
          <Box flex={1} p={6} bg="white" borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>
              Authentic Malaysian Cuisine
            </Heading>
            <Text>
              Experience the rich flavors and traditional recipes passed down through generations.
            </Text>
          </Box>
          <Box flex={1} p={6} bg="white" borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>
              Cozy Atmosphere
            </Heading>
            <Text>
              Enjoy your meal in our comfortable and welcoming environment.
            </Text>
          </Box>
          <Box flex={1} p={6} bg="white" borderRadius="lg" boxShadow="md">
            <Heading as="h3" size="md" mb={4}>
              Fresh Ingredients
            </Heading>
            <Text>
              We use only the freshest ingredients to ensure the best quality in every dish.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home 