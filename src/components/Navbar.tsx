import { Box, Flex, Heading } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box bg="orange.500" px={4} py={4}>
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Heading as="h1" size="lg" color="white">
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
            Lepak Santai Seremban
          </RouterLink>
        </Heading>
        <Flex gap={8}>
          <RouterLink 
            to="/" 
            style={{ 
              color: 'white', 
              fontWeight: 500,
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Home
          </RouterLink>
          <RouterLink 
            to="/menu" 
            style={{ 
              color: 'white', 
              fontWeight: 500,
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Menu
          </RouterLink>
          <RouterLink 
            to="/about" 
            style={{ 
              color: 'white', 
              fontWeight: 500,
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            About Us
          </RouterLink>
          <RouterLink 
            to="/contact" 
            style={{ 
              color: 'white', 
              fontWeight: 500,
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Contact
          </RouterLink>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 