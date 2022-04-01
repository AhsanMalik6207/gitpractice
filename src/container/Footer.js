import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import '../App.css';

export default function Footer() {
	return (
		<AppBar
			position="static"
			color="blue"
			style={{ backgroundColor: '#6d6a6a', color: 'blue' }}
		>
			<Container maxWidth="sm" background-color="#6d6a6a">
				<Toolbar>
					<Typography variant="h6" color="blue">
						<h2>&copy; 2022 @Ahsan Shopping-Store</h2>
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
