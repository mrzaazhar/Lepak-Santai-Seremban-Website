import { Box, Container, Heading, Text, Button, Image, Stack, Icon, SimpleGrid, Flex, useBreakpointValue } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Link as RouterLink } from 'react-router-dom'
import { FaInstagram, FaTiktok } from 'react-icons/fa'

const Home = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  
  // Responsive values
  const headingSize = useBreakpointValue({ base: '3xl', md: '4xl' })
  const textSize = useBreakpointValue({ base: 'lg', md: '2xl' })
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' })
  const stackDirection = useBreakpointValue({ base: 'column', sm: 'row' })
  const containerPadding = useBreakpointValue({ base: 4, md: 8 })

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        minH={{ base: '90vh', md: '100vh' }}
        display="flex" 
        alignItems="center" 
        bgImage="url('/restaurant-bg.jpg')"
        bgSize="cover"
        backgroundPosition="center"
        position="relative"
        px={containerPadding}
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
          <Stack gap={{ base: 6, md: 8 }} align="center" textAlign="center" color="white">
            <Heading 
              as="h1" 
              size={headingSize}
              fontWeight="bold"
              letterSpacing="wider"
              px={{ base: 2, md: 0 }}
            >
              LEPAK SANTAI SEREMBAN
            </Heading>
            <Text 
              fontSize={textSize} 
              maxW="800px"
              px={{ base: 4, md: 0 }}
            >
              Experience authentic Malaysian cuisine in a relaxed and comfortable atmosphere
            </Text>
            <Stack 
              direction={stackDirection} 
              gap={4}
              w={{ base: 'full', sm: 'auto' }}
            >
              <RouterLink to="/menu" style={{ width: '100%' }}>
                <Button 
                  size={buttonSize}
                  colorScheme="orange" 
                  px={{ base: 6, md: 8 }}
                  w={{ base: 'full', sm: 'auto' }}
                  _hover={{ transform: 'translateY(-2px)' }}
                >
                  View Menu
                </Button>
              </RouterLink>
              <RouterLink to="/contact" style={{ width: '100%' }}>
                <Button 
                  size={buttonSize}
                  variant="outline" 
                  color="white" 
                  borderColor="white"
                  px={{ base: 6, md: 8 }}
                  w={{ base: 'full', sm: 'auto' }}
                  _hover={{ bg: 'whiteAlpha.200' }}
                >
                  Contact Us
                </Button>
              </RouterLink>
            </Stack>
            <Flex 
              gap={4} 
              mt={8}
              direction={{ base: 'column', sm: 'row' }}
              w={{ base: 'full', sm: 'auto' }}
            >
              <Button 
                as={RouterLink}
                to="https://instagram.com"
                leftIcon={<FaInstagram />}
                variant="ghost"
                color="white"
                w={{ base: 'full', sm: 'auto' }}
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                @lepaksantai
              </Button>
              <Button 
                as={RouterLink}
                to="https://tiktok.com"
                leftIcon={<FaTiktok />}
                variant="ghost"
                color="white"
                w={{ base: 'full', sm: 'auto' }}
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                @lepaksantai
              </Button>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* About Section */}
      <Box py={{ base: 12, md: 20 }} bg={bgColor}>
        <Container maxW="1200px" px={containerPadding}>
          <Stack gap={{ base: 8, md: 12 }}>
            <Stack gap={4} textAlign="center">
              <Heading 
                as="h2" 
                size={{ base: 'xl', md: '2xl' }}
                bgGradient="linear(to-r, orange.400, orange.600)"
                bgClip="text"
              >
                ABOUT US
              </Heading>
              <Text 
                fontSize={{ base: 'lg', md: 'xl' }} 
                color={textColor} 
                maxW="800px" 
                mx="auto"
                px={{ base: 4, md: 0 }}
              >
                Welcome to Lepak Santai Seremban, where we bring the authentic flavors of Malaysia to your table.
                Founded in 2020, our restaurant has been serving the community with traditional Malaysian cuisine.
              </Text>
            </Stack>
            <SimpleGrid 
              columns={{ base: 1, md: 2 }} 
              gap={{ base: 6, md: 8 }}
              px={{ base: 4, md: 0 }}
            >
              <Box>
                <Image 
                  src="/restaurant-interior.jpg" 
                  alt="Restaurant Interior"
                  borderRadius="xl"
                  boxShadow="xl"
                  w="full"
                  h={{ base: '250px', md: '400px' }}
                  objectFit="cover"
                />
              </Box>
              <Stack gap={6} justify="center">
                <Heading as="h3" size={{ base: 'md', md: 'lg' }}>
                  Our Story
                </Heading>
                <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }}>
                  Located in the heart of Seremban, we pride ourselves on serving authentic Malaysian dishes
                  in a cozy and welcoming environment. Our chefs bring years of experience and passion to
                  create memorable dining experiences.
                </Text>
                <RouterLink to="/about">
                  <Button 
                    colorScheme="orange" 
                    size={buttonSize}
                    w={{ base: 'full', md: 'auto' }}
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