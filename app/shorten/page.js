"use client"
import React from 'react'
import { useState } from 'react'
const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)

    const handleChange = () => { }

  return (
    <div>
        <h1>Generate your short URLs</h1>
        <div>
            <input type="text" placeholder='Enter your URL' onChange={handleChange} />
            <input type="text" placeholder='Enter your preferred short URL text' onChange={handleChange} className='p-4 focus:outline-purple-600' />
            <button>Generate</button>
        </div>
    </div>
  )
}

export default Shorten