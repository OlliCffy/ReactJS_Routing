import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Page from './Page'
import Artwork from './Artwork'
import Social from './Social'

function App(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Page />} />
				<Route path="/artwork" element={<Artwork />} />
				<Route path="/social" element={<Social />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App