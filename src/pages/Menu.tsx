import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, Badge } from '@chakra-ui/react'

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
  image: string
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Nasi Lemak",
    description: "Traditional Malaysian coconut rice served with sambal, anchovies, peanuts, and boiled egg",
    price: "RM 12.90",
    category: "Main Course",
    image: "/placeholder-food.jpg"
  },
  {
    id: 2,
    name: "Char Kway Teow",
    description: "Stir-fried flat rice noodles with prawns, eggs, and bean sprouts",
    price: "RM 14.90",
    category: "Main Course",
    image: "/placeholder-food.jpg"
  },
  {
    id: 3,
    name: "Roti Canai",
    description: "Flaky flatbread served with curry dipping sauce",
    price: "RM 4.90",
    category: "Appetizer",
    image: "/placeholder-food.jpg"
  },
  // Add more menu items as needed
]

const Menu = () => {
  return (
    <Container maxW="1200px" py={8}>
      <Heading as="h1" size="2xl" mb={8} textAlign="center">
        Our Menu
      </Heading>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
        {menuItems.map((item) => (
          <Box
            key={item.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg="white"
            boxShadow="md"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.02)' }}
          >
            <Image
              src={item.image}
              alt={item.name}
              height="200px"
              width="100%"
              objectFit="cover"
              // fallbackSrc prop removed because it is not valid for Chakra UI's Image component
            />
            <VStack p={4} align="start" gap={2}>
              <Badge colorScheme="orange">{item.category}</Badge>
              <Heading as="h3" size="md">
                {item.name}
              </Heading>
              <Text color="gray.600">{item.description}</Text>
              <Text fontWeight="bold" color="orange.500">
                {item.price}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default Menu 