import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Signup.css"



function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const PostDetails=(pic)=>{

  }

  const submitHandler =()=>{

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
      <Button style={{color:'blackAlpha'}} w='100%' marginTop={15} onClick={submitHandler}>Log In</Button>
      <Button style={{color:'red'}} w='100%'  onClick={()=>{setEmail('guest@example.com');setPassword('123456')}}>Get Guest User Credentials</Button>
    </VStack >
  )
}

export default Login