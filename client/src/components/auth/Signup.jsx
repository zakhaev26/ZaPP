import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Signup.css"
function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [showCPass, setShowCPass] = useState(false)

  const PostDetails=(pic)=>{

  }

  const submitHandler =()=>{

  }
  return (
    <VStack spacing={5} >
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input type='text' placeholder='Your Name' value={name} onChange={(e) => { setName(e.target.value) }}></Input>
      </FormControl >
      <FormControl isRequired>
        <FormLabel>E-mail</FormLabel>
        <Input type='text' placeholder='Your E-mail Address' value={email} onChange={(e) => { setEmail(e.target.value) }}></Input>
      </FormControl>
      <FormControl >
        <FormLabel>Click here to Select Profile Pic URI</FormLabel>
        <Input type='file' accept='image/*' p={1.5} placeholder='Your Profile Pic' onChange={(e) => { PostDetails(e.target.files[0])}}></Input>
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
      <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input type={showCPass ? "text" : "password"} placeholder='Confirm Password' value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }}></Input>
          <InputRightElement width='4.5rem'>
            <Button h="1.75rem" size='sm' onClick={() => setShowCPass(prevState => !prevState)} >{showCPass ? "Hide" : "Show"}</Button>
          </InputRightElement>
        </InputGroup>
      </FormControl >
    
      <Button style={{color:'blackAlpha'}} w='100%' marginTop={15} onClick={submitHandler}>Sign Up</Button>
    </VStack >
  )
}

export default Signup
