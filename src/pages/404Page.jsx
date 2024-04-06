import { useState } from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/404.png'

const NotFound = () => {
	return (
		<div className="w-full flex items-center justify-center flex-col px-2">
        		<img src={Image} alt="In development" className="" />
        		<h1 className="dark:text-white text-3xl">Oops!!! Seems you're lost? </h1>
        		<Link to='/' className="w-full max-w-3xl h-16 text-white text-center bg-purpleP my-3 flex items-center justify-center text-2xl rounded-xl">Go Back</Link>
      	</div>
	)
}

export default NotFound