import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

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
						&copy; 2022 @Ahsan Shopping-Store
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
