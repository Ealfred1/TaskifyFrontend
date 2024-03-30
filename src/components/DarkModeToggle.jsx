import { useState, useEffect } from 'react'


const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState((localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark')) : false))

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add('dark');
      import ('primereact/resources/themes/lara-dark-indigo/theme.css')
    } else {
      htmlElement.classList.remove('dark');
      import ('primereact/resources/themes/lara-light-indigo/theme.css')
    }


  }, [darkMode])

  const handleDarkMode = () => {
  	setDarkMode(!darkMode)
  	localStorage.setItem('dark', JSON.stringify(!darkMode))
  }

	return (
		<>
			<i className={darkMode ? 'bx bx-sun i' : 'bx bx-moon i'} id="darkLight" onClick={handleDarkMode}></i>
		</>
	)
}

export default DarkModeToggle