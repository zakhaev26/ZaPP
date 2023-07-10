import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Signup.css"
import { useToast } from '@chakra-ui/react'
import axios from "axios"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'



function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false);
  const history = useHistory()
  const toast = useToast()


  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!(email && password)) {
      toast({
        title: 'Please Fill All the Fields!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
      setLoading(false);
      return;
    }

    try {
      const configuration = {
        headers: {
          "Content-type": "application/json"
        }
      };

      const { data } = await axios.post('http://localhost:8089/api/user/login', {
        email: email, 
        password: password
      },configuration) 

      toast({
        title: 'Login Successful!',
        description:'Welcome to ZaPP!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      
      localStorage.setItem("userInfo",JSON.stringify(data));
      setLoading(false);
      history.push('/chats');

    } catch (e) {

      toast({
        title: 'Error occured while logging you in...',
        description:`${e.response.data.message}`,
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
      setLoading(false);

    }
  }

  return (
    <VStack spacing={5} >
      <FormControl isRequired>
        <FormLabel>E-mail</FormLabel>
        <Input type='text' placeholder='Your E-mail Address' value={email} onChange={(e) => { setEmail(e.target.value) }}></Input>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input type={showPass ? "text" : "password"} placeholder='Enter Password' value={password} onChange={(e) => { setPassword(e.target.value) }}></Input>
          <InputRightElement width='4.5rem'>
            <Button h="1.75rem" size='sm' onClick={() => setShowPass(prevState => !prevState)} >{showPass ? "Hide" : "Show"}</Button>
          </InputRightElement>
        </InputGroup>
      </FormControl >
      <Button style={{ color: 'blackAlpha' }} w='100%' marginTop={15} onClick={submitHandler} isLoading={loading}>Log In</Button>
      <Button style={{ color: 'red' }} w='100%' onClick={() => { setEmail('guest@example.com'); setPassword('123456') }}>Get Guest User Credentials</Button>
    </VStack >
  )
}

export default Login