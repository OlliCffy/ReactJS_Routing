import kano from './assets/mywifessmile.jpeg'

function Profile(){
	return(
		<div className="profile">
			<div className="name">
				<h1>SIGIT INDRA LOSA</h1>
				<br />
				<p>Saya adalah mahasiswa dari Universitas Pendidikan Indonesia yang saat ini sedang belajar ReactJS dan mencoba membuat profile page.</p>
			</div>
			<div className="image">
				<img src={kano} alt="Wife" />
			</div>
		</div>
	)
}

export default Profile