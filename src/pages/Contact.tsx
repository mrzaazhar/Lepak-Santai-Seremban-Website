import { Box, Container, Heading, Text, SimpleGrid, Input, Textarea, Button, VStack, Icon, Flex } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const cardBg = useColorModeValue('white', 'gray.700')
  const inputBg = useColorModeValue('gray.50', 'gray.600')

  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="1200px">
        <Heading 
          as="h1" 
          size="2xl" 
          mb={12} 
          textAlign="center"
          bgGradient="linear(to-r, orange.400, orange.600)"
          bgClip="text"
        >
          Contact Us
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={12}>
          {/* Contact Information */}
          <Box>
            <VStack gap={6} align="stretch">
              <Box p={8} bg={cardBg} borderRadius="xl" boxShadow="lg">
                <Flex align="center" mb={4}>
                  <Icon as={FaMapMarkerAlt} boxSize={8} color="orange.500" mr={4} />
                  <Box>
                    <Heading as="h3" size="md" mb={2}>
                      Location
                    </Heading>
                    <Text color="gray.600">
                      123 Jalan Seremban<br />
                      Seremban, Negeri Sembilan<br />
                      Malaysia
                    </Text>
                  </Box>
                </Flex>
              </Box>

              <Box p={8} bg={cardBg} borderRadius="xl" boxShadow="lg">
                <Flex align="center" mb={4}>
                  <Icon as={FaPhone} boxSize={8} color="orange.500" mr={4} />
                  <Box>
                    <Heading as="h3" size="md" mb={2}>
                      Phone
                    </Heading>
                    <Text>+60 6-123 4567</Text>
                  </Box>
                </Flex>
              </Box>

              <Box p={8} bg={cardBg} borderRadius="xl" boxShadow="lg">
                <Flex align="center" mb={4}>
                  <Icon as={FaEnvelope} boxSize={8} color="orange.500" mr={4} />
                  <Box>
                    <Heading as="h3" size="md" mb={2}>
                      Email
                    </Heading>
                    <Text>info@lepaksantaiseremban.com</Text>
                  </Box>
                </Flex>
              </Box>

              <Box p={8} bg={cardBg} borderRadius="xl" boxShadow="lg">
                <Flex align="center" mb={4}>
                  <Icon as={FaClock} boxSize={8} color="orange.500" mr={4} />
                  <Box>
                    <Heading as="h3" size="md" mb={2}>
                      Opening Hours
                    </Heading>
                    <Text>
                      Monday - Friday: 11:00 AM - 10:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 11:00 PM
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </VStack>
          </Box>

          {/* Contact Form */}
          <Box p={8} bg={cardBg} borderRadius="xl" boxShadow="lg">
            <Heading as="h2" size="lg" mb={8}>
              Send us a Message
            </Heading>
            <VStack gap={6}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input 
                  type="text" 
                  placeholder="Your name" 
                  size="lg"
                  bg={inputBg}
                  _focus={{ borderColor: 'orange.500' }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input 
                  type="email" 
                  placeholder="Your email" 
                  size="lg"
                  bg={inputBg}
                  _focus={{ borderColor: 'orange.500' }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input 
                  type="text" 
                  placeholder="Message subject" 
                  size="lg"
                  bg={inputBg}
                  _focus={{ borderColor: 'orange.500' }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea 
                  placeholder="Your message" 
                  rows={6}
                  bg={inputBg}
                  _focus={{ borderColor: 'orange.500' }}
                />
              </FormControl>
              <Button 
                colorScheme="orange" 
                size="lg" 
                width="full"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
              >
                Send Message
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Contact 