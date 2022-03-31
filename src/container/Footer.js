import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import '../App.css'

export default function Footer() {
    return (
        <AppBar position="static" color="white" className="footer">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="h5" color="black">
                 @ Shopping-Store @ 2022
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}