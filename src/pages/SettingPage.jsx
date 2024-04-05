import { useState } from 'react'
import Image from '../assets/feature.png'

const SettingPage = () => {

	return (
		<div className="w-full flex items-center justify-center flex-col">
        		<img src={Image} alt="In development" className="" />
        		<h1 className="dark:text-white text-3xl">This page is under development!</h1>
      	</div>
	)
}

export default SettingPage