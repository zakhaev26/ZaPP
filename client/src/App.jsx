import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Chatpage from './Pages/Chatpage.jsx';
import Homepage from './Pages/Homepage.jsx';
function App() {

  return (
    <div className='App'>
     <Route exact path='/' component = {Homepage} />
     <Route path='/chats' component = {Chatpage} />
    </div>
  )
}

export default App
