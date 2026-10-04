import {Link} from 'react-router-dom'

import art1 from './assets/art1.jpg'
import art2 from './assets/art2.jpg'
import art3 from './assets/art3.jpg'
import art4 from './assets/art4.jpg'
import art5 from './assets/art5.jpg'
import art6 from './assets/art6.jpg'

function Artwork(){
	return(
		<div className="artwork">
			<div className="art">
				<img src={art1} alt="art1" />
				<img src={art4} alt="art4" />
				<img src={art3} alt="art3" />
				<img src={art5} alt="art5" />
				<img src={art2} alt="art2" />
				<img src={art6} alt="art6" />
			</div>

			<div className="back">
				<Link to="/">Back</Link>
			</div>
		</div>
	)
}

export default Artwork