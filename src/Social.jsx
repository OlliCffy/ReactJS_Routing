import {Link} from 'react-router-dom'

function Social(){
	return(
		<div className="social">
			<div className="social-link">
				<a href="//act.hoyolab.com/app/community-game-records-sea/index.html?user_id=424790619">Genshin</a>
				<a href="//github.com/OlliCffy">Github</a>
				<a href="//instagram.com/ollicffy">Instagram</a>
				<a href="//x.com/ollicffy">X</a>
			</div>

			<div className="back">
				<Link to="/">Back</Link>
			</div>
		</div>
	)
}

export default Social	