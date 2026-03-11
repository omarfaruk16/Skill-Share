import React from 'react'
import ErrorImage from "../assets/error-404.png"
import Header from '../Components/Header'

const Error = () => {
  return (
    <div>
      <Header></Header>
      <h1 className='py-5 text-2xl text-center font-semibold'>Please Enter valid URL</h1>
      <div className='flex justify-center'>
        <img className='' src={ErrorImage} alt="" />
      </div>
      
    </div>
  )
}

export default Error