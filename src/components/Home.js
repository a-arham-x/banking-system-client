import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center'>
    <h1 className='text-blue-700 text-5xl font-bold mt-24'>Welcome to our Banking System</h1>
    <h3 className='text-blue-700 text-3xl my-2'>Proceed to make transactions</h3>
    <Link to="/users"><button className='bg-blue-500 text-white text-lg py-3 px-3 rounded my-6'>View Users</button></Link>
    </div>
  )
} 

export default Home