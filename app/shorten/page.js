"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl":shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) =>{
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        alert(result.message)
        console.log(result)})
      .catch((error) => console.error(error));
  }

  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
      <div className='flex flex-col gap-2'>
        <input value={url} type="text" placeholder='Enter your URL' onChange={(e) => { seturl(e.target.value) }} className='px-4
            py-2 bg-white focus:outline-purple-600 rounded-md' />
        <input value={shorturl} type="text" placeholder='Enter your preferred short URL text' onChange={(e) => { setshorturl(e.target.value) }} className='px-4
            py-2 bg-white focus:outline-purple-600 rounded-md' />
        <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold text-white'>Generate</button>
      </div>

      {generated && <code>
       Your Link: <Link target='_blank' href={generated} >{generated}</Link> 
        </code>}
    </div>
  )
}

export default Shorten