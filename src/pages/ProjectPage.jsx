import { useState, useEffect } from 'react';
import axiosPrivate from '../api/axiosPrivate';
import Image from '../assets/feature.png'

const ProjectPage = () => {

	return (
		<div>
			<div className="w-full flex items-center justify-center flex-col px-1">
        		<img src={Image} alt="In development" className="" />
        		<h1 className="dark:text-white text-3xl">This page is under development!</h1>
      		</div>
		</div>
	)
}

export default ProjectPage