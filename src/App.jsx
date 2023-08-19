import { useState } from 'react'
import Hero from './components/Hero/Hero'
import './App.css'
import About from './components/About/About'
import GridPhotos from './components/GridPhotos/GridPhotos'
import ThemeBtn from './components/ThemeBtn/ThemeBtn'

function App() {
	return <>
		<main className="main">
			<ThemeBtn />
			<Hero />
			<About />
			<GridPhotos />
		</main>
	</>
}

export default App
