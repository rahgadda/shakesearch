const {
    colors,
    CssBaseline,
    ThemeProvider,
    Typography,
    Container,
    makeStyles,
    createMuiTheme,
    Box,
    SvgIcon,
    Link,
} = MaterialUI;

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://rahgadda.github.io/shakesearch/">
                Rahul Kiran Gaddam
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function App() {
    return (
        <Container maxWidth="sm">
            <div style={{ marginTop: 24, }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    HelloWorld
                </Typography>
                <Copyright />
            </div>
        </Container>
    )
}

export default App;