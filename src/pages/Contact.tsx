import { Box, Container, Heading, Text, SimpleGrid, Input, Textarea, Button, VStack, Icon, Flex } from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <Box>
      <Container maxW="1200px" py={8}>
        <Heading as="h1" size="2xl" mb={8} textAlign="center">
          Contact Us
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {/* Contact Information */}
          <Box>
            <VStack gap={6} align="stretch">
              <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
                <Flex align="center" mb={4}>
                  <Icon as={FaMapMarkerAlt} boxSize={6} color="orange.500" mr={4} />
                  <Box>
                    <Heading as="h3" size="md" mb={1}>
                      Location
                    </Heading>
                    <Text>
                      123 Jalan Seremban<br />
                      Seremban, Negeri Sembilan<br />
                      Malaysia
                    </Text>
                  </Box>
                </Flex>
              </Box>

              <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
                <Flex align="center" mb={4}>
                  <Icon as={FaPhone} boxSize={6} color="orange.500" mr={4} />
                  <Box>
                    <Heading as="h3" size="md" mb={1}>
                      Phone
                    </Heading>
                    <Text>+60 6-123 4567</Text>
                  </Box>
                </Flex>
              </Box>

              <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
                <Flex align="center" mb={4}>
                  <Icon as={FaEnvelope} boxSize={6} color="orange.500" mr={4} />
                  <Box>
                    <Heading as="h3" size="md" mb={1}>
                      Email
                    </Heading>
                    <Text>info@lepaksantaiseremban.com</Text>
                  </Box>
                </Flex>
              </Box>

              <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
                <Flex align="center" mb={4}>
                  <Icon as={FaClock} boxSize={6} color="orange.500" mr={4} />
                  <Box>
                    <Heading as="h3" size="md" mb={1}>
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
          <Box p={6} bg="white" borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="lg" mb={6}>
              Send us a Message
            </Heading>
            <VStack gap={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Your email" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Subject</FormLabel>
                <Input type="text" placeholder="Message subject" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your message" rows={6} />
              </FormControl>
              <Button colorScheme="orange" size="lg" width="full">
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