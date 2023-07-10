import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import "./Signup.css"
import { useToast } from '@chakra-ui/react'
import axios from "axios"
import {useHistory} from "react-router-dom"
function Signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [showCPass, setShowCPass] = useState(false)
  const [loading, setLoading] = useState(false);
  const [pic,setPic] = useState('');
  // const [loading,setLoading] = useState(false);
 
  // const PostDetails=(pic)=>{
  //   setLoading(true);
  //   if(pic==undefined){
  //     toast({
  //       title: 'Please Select A Picture!',
  //       status: 'waarning',
  //       duration: 5000,
  //       isClosable: true,
  //     })
  //   }
  //     return;

  //   if(pic.type ==='image/jpeg' || pic.type ==='image/png'){
  //     const data = new FormData();
  //     data.append("file" , pic);
  //     data.append("upload_preset" , 'chat-app');
  //     data.append("cloud_name","dva5ejq94");
  //     fetch("https://api.cloudinary.com/v1_1/dva5ejq94/image/upload",{
  //       method:"POST",
  //       body:data,
  //     }).then(res=>res.json())
  //     .then(data=>setPic(data.url.toString())).catch(e=>console.log(setLoading(false)))
  //     setLoading(false);
  //   }
  //   else{
  //     toast({
  //       title: 'Please Select A Picture!',
  //       status: 'waarning',
  //       duration: 5000,
  //       isClosable: true,
  //     })
  //   }

  // }
    const toast = useToast()
    const history  = useHistory()

  const submitHandler = async () => {
    setLoading(true);

    if (!(name && email && confirmPassword && password)) {
      toast({
        title: 'Please Fill All the Fields!',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
    }
    else if (password != confirmPassword) {
      toast({
        title: `Passwords Don't Match!`,
        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        }
      };

      const { data } = await axios.post("http://localhost:8089/api/user", {
        name: name,
        email: email,
        password: password,
        pic: pic
      }, config);

      toast({
        title: `Registration Successful!`,
        description:"Welcome to ZaPP!",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
     
      localStorage.setItem('userInfo',JSON.stringify(data));
      history.push('/chats');
    
    }catch(e){
      toast({
        title: `Error while Signing up`,
        description:`${e.message}`,        status: 'warning',
        duration: 5000,
        isClosable: true,
      })
    }finally{
      setLoading(false)
    }


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
        <Input type='file' accept='image/*' p={1.5} placeholder='Your Profile Pic' onChange={(e) => { setPic(e.target.files[0]) }}></Input>
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

      <Button style={{ color: 'blackAlpha' }} w='100%' marginTop={15} onClick={submitHandler} isLoading={loading}>Sign Up</Button>
    </VStack >
  )
}

export default Signup
