import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";

export default function Footer() {
    return (
        <AppBar position="static" color="white">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="h6" color="black">
                &copy; 2022 @Ahsan Shopping-Store
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}