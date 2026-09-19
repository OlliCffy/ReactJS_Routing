import './App.css';
import kano from './assets/mywifessmile.jpeg'

function App() {
	return (
		<div className="page">
			<div className="profile">
				<div className="name">
					<h1>SIGIT INDRA LOSA</h1>
					<p>Saya adalah mahasiswa dari Universitas Pendidikan Indonesia yang saat ini sedang belajar ReactJS dan mencoba membuat profile page.</p>
				</div>
				<div className="image">
					<img src={kano} alt="Wife" />
				</div>
			</div>
			<div className="list">
				<div className="hobbies">
					<h2>HOBBIES</h2>
					<ul>
						<li>Gaming</li>
						<li>Drawing</li>
						<li>Doomscrolling</li>
					</ul>
				</div>
				<div className="games">
					<h2>FAVORITE GAMES</h2>
					<ul>
						<li>Blue Archive</li>
						<li>Wuthering Waves</li>
						<li>Arknights</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default App
