import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')
  const [pic, setPic] = useState('')

  return (
     <VStack spacing={5} >
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
            <Input type='text' placeholder='Your Name' value={name} onChange={(e)=>{setName(e.target.value)}}></Input>
        </FormControl >
        <FormControl isRequired>
           <FormLabel>E-mail</FormLabel>
            <Input type='text' placeholder='Your Name' value={email} onChange={(e)=>{setEmail(e.target.value)}}></Input>
        </FormControl>
        <FormControl >
            <FormLabel>Profile Pic URI</FormLabel>
            <Input type='text' placeholder='Your Name' value={pic} onChange={(e)=>{setPic(e.target.value)}}></Input>
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type='password' placeholder='Enter Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></Input>
        </FormControl >
        <FormControl isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}></Input>
        </FormControl >
     </VStack >
  )
}

export default Signup
