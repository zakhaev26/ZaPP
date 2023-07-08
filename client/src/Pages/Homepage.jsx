import React from 'react'
import { Box, Container ,Tab,TabIndicator,TabList,TabPanel,TabPanels,Tabs,Text} from "@chakra-ui/react";
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

function Homepage() {
  return (
    <Container 
      maxW='xl'
      centerContent>
      <Box d='flex' justifyContent='center' w="100%" 
      p={3}
      m="40px 0 15px 0" borderRadius='lg' borderWidth='1px' backgroundColor='white'>
        <Text fontSize='4xl' fontFamily='Raleway' color='black' textAlign='center'>
          ZaPP!
        </Text>
      </Box>

      <Box bg='white' w='100%' p={4} borderRadius='lg' borderWidth='1px' h="fit-content">

      <Tabs position="relative" variant="unstyled">
    <TabList>
      <Tab w='50%'>Login</Tab>
      <Tab w='50%'>Signup</Tab>
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="black"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
        <Login/>
      </TabPanel>
      <TabPanel>
        <Signup/>
      </TabPanel>
    </TabPanels>
  </Tabs>
      </Box>



    </Container>
  )
}

export default Homepage
