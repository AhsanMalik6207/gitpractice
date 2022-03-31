import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import '../App.css';

export default function Footer() {
	return (
		<AppBar
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
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
