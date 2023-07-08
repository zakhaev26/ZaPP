import React, { useEffect } from 'react'
import axios from "axios"
function Chatpage() {

  const fetchData = async () => {
    const data = await axios.get("http://localhost:8089/api/data");
    console.log("data = " + JSON.stringify(data.data) );
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Chatpage</h1>
    </div>
  )
}

export default Chatpage
