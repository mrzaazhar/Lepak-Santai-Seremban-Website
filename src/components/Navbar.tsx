import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Container, Flex, Button, Stack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  const bgColor = 'white'
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box 
      as="nav" 
      position="fixed" 
      w="100%" 
      bg={bgColor} 
      borderBottom="1px" 
      borderColor={borderColor}
      zIndex="sticky"
    >
      <Container maxW="1200px">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <RouterLink to="/">
            <Box fontSize="2xl" fontWeight="bold" color="orange.500">
              LEPAK SANTAI
            </Box>
          </RouterLink>

          <Stack direction="row" gap={8} alignItems="center">
            <RouterLink to="/">
              <Button variant="ghost">HOME</Button>
            </RouterLink>
            <RouterLink to="/about">
              <Button variant="ghost">ABOUT US</Button>
            </RouterLink>
            <RouterLink to="/menu">
              <Button variant="ghost">MENU</Button>
            </RouterLink>
            <RouterLink to="/contact">
              <Button variant="ghost">CONTACT</Button>
            </RouterLink>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar 