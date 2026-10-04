import {Link} from 'react-router-dom'

import Profile from './Profile'
import List from './List'

function Page(){
	return(
		<div className="page">
			<Profile />
			<List />

			<div className="link">
				<Link to="/artwork">Artwork</Link>
				<Link to="/social">Social</Link>
			</div>
		</div>
	)
}

export default Page