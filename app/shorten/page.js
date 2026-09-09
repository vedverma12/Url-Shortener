"use client"
import React from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)
  return (
    <div>
        <h1>Generate your short URLs</h1>
        <div>
            <input type="text" placeholder='Enter your URL' />
            <input type="text" placeholder='Enter your preferred short URL text' />
            <button>Generate</button>
        </div>
    </div>
  )
}

export default Shorten