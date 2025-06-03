import { Box, Container, Heading, SimpleGrid, Text, Image, VStack, Badge, Input, Stack, Select } from '@chakra-ui/react'
import { useState } from 'react'
import { useColorModeValue as useColorModeValueFromChakraUI } from '@chakra-ui/color-mode'

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
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const cardBg = useColorModeValueFromChakraUI('white', 'gray.700')

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === 'all' || item.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <Container maxW="1200px" py={12}>
      <Heading 
        as="h1" 
        size="2xl" 
        mb={8} 
        textAlign="center"
        bgGradient="linear(to-r, orange.400, orange.600)"
        bgClip="text"
      >
        Our Menu
      </Heading>

      <Stack direction={{ base: 'column', md: 'row' }} mb={8} gap={4}>
        <Input
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          size="lg"
          maxW="400px"
        />
        <Select
          value={category}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
          size="lg"
          maxW="200px"
        >
          <option value="all">All Categories</option>
          <option value="Main Course">Main Course</option>
          <option value="Appetizer">Appetizer</option>
        </Select>
      </Stack>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
        {filteredItems.map((item) => (
          <Box
            key={item.id}
            borderRadius="xl"
            overflow="hidden"
            bg={cardBg}
            boxShadow="lg"
            transition="all 0.3s"
            _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
          >
            <Image
              src={item.image}
              alt={item.name}
              height="250px"
              width="100%"
              objectFit="cover"
            />
            <VStack p={6} align="start" gap={3}>
              <Badge colorScheme="orange" px={3} py={1} borderRadius="full">
                {item.category}
              </Badge>
              <Heading as="h3" size="md">
                {item.name}
              </Heading>
              <Text color="gray.600" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {item.description}
              </Text>
              <Text fontWeight="bold" color="orange.500" fontSize="xl">
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