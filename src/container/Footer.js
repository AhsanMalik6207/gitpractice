import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
<<<<<<< HEAD
import '../App.css';
=======
>>>>>>> origin/mohsin

export default function Footer() {
	return (
		<AppBar
<<<<<<< HEAD
			style={{ backgroundColor: 'gray' }}
			position="static"
			color="white"
			className="footer"
		>
			<Container maxWidth="md">
				<Toolbar>
					<Typography variant="h5" color="black">
						<div>
							<h2>Mohsin@gmail.com</h2>
							<h2>@ Shopping-Store @ 2022</h2>
						</div>
=======
			position="static"
			color="blue"
			style={{ backgroundColor: '#6d6a6a', color: 'blue' }}
		>
			<Container maxWidth="sm" background-color="#6d6a6a">
				<Toolbar>
					<Typography variant="h6" color="blue">
						<h2>&copy; 2022 @Ahsan Shopping-Store</h2>
>>>>>>> origin/mohsin
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
