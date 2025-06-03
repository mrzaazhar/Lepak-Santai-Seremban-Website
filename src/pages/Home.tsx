import { Box, Container, Heading, Text, Button, Image, Stack, Icon, SimpleGrid, Flex } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Link as RouterLink } from 'react-router-dom'
import { FaInstagram, FaTiktok } from 'react-icons/fa'

const Home = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        minH="100vh" 
        display="flex" 
        alignItems="center" 
        bgImage="url('/restaurant-bg.jpg')"
        bgSize="cover"
        backgroundPosition="center"
        position="relative"
      >
        <Box 
          position="absolute" 
          top={0} 
          left={0} 
          right={0} 
          bottom={0} 
          bg="blackAlpha.600"
        />
        <Container maxW="1200px" position="relative" zIndex={1}>
          <Stack gap={8} align="center" textAlign="center" color="white">
            <Heading 
              as="h1" 
              size="4xl" 
              fontWeight="bold"
              letterSpacing="wider"
            >
              LEPAK SANTAI SEREMBAN
            </Heading>
            <Text fontSize="2xl" maxW="800px">
              Experience authentic Malaysian cuisine in a relaxed and comfortable atmosphere
            </Text>
            <Stack direction="row" gap={4}>
              <RouterLink to="/menu">
                <Button 
                  size="lg" 
                  colorScheme="orange" 
                  px={8}
                  _hover={{ transform: 'translateY(-2px)' }}
                >
                  View Menu
                </Button>
              </RouterLink>
              <RouterLink to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  color="white" 
                  borderColor="white"
                  px={8}
                  _hover={{ bg: 'whiteAlpha.200' }}
                >
                  Contact Us
                </Button>
              </RouterLink>
            </Stack>
            <Flex gap={4} mt={8}>
              <Button 
                as="a" 
                href="https://instagram.com" 
                target="_blank"
                leftIcon={<FaInstagram />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                @lepaksantai
              </Button>
              <Button 
                as="a" 
                href="https://tiktok.com" 
                target="_blank"
                leftIcon={<FaTiktok />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                @lepaksantai
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={20} bg={bgColor}>
        <Container maxW="1200px">
          <Stack gap={12}>
            <Stack gap={4} textAlign="center">
              <Heading 
                as="h2" 
                size="2xl"
                bgGradient="linear(to-r, orange.400, orange.600)"
                bgClip="text"
              >
                ABOUT US
              </Heading>
              <Text fontSize="xl" color={textColor} maxW="800px" mx="auto">
                Welcome to Lepak Santai Seremban, where we bring the authentic flavors of Malaysia to your table.
                Founded in 2020, our restaurant has been serving the community with traditional Malaysian cuisine.
              </Text>
            </Stack>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
              <Box>
                <Image 
                  src="/restaurant-interior.jpg" 
                  alt="Restaurant Interior"
                  borderRadius="xl"
                  boxShadow="xl"
                />
              </Box>
              <Stack gap={6} justify="center">
                <Heading as="h3" size="lg">
                  Our Story
                </Heading>
                <Text color={textColor}>
                  Located in the heart of Seremban, we pride ourselves on serving authentic Malaysian dishes
                  in a cozy and welcoming environment. Our chefs bring years of experience and passion to
                  create memorable dining experiences.
                </Text>
                <RouterLink to="/about">
                  <Button 
                    colorScheme="orange" 
                    size="lg"
                    _hover={{ transform: 'translateY(-2px)' }}
                  >
                    Learn More
                  </Button>
                </RouterLink>
              </Stack>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 