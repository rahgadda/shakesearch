function App() {
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item container xs={2} style={{"maxWidth": "100%", "maxHeight":"100%"}} >
                <Header />
            </Grid>
            <Grid item container xs={8} style={{"maxWidth": "100%", "maxHeight":"100%"}}>
                <Grid item xs={1} sm={2} />
                <Grid item xs={10} sm={8} container> 
                    <Body />
                </Grid>
                <Grid item xs={1} sm={2} />
            </Grid>
            <Grid item container xs={2} style={{"maxWidth": "100%", "maxHeight":"100%"}}>
                <Footer />
            </Grid>
        </Grid>
    );
}

export default App;