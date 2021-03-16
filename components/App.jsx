function App() {
    return (
        <Grid container direction="column" spacing={2} xs={12} style={{"max-width": "100%", "max-height":"100%"}}>
            <Grid item container xs={2} style={{"max-width": "100%", "max-height":"100%"}} >
                <Header />
            </Grid>
            <Grid item container xs={8} style={{"max-width": "100%", "max-height":"100%"}}>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={8} container> 
                    <Body />
                </Grid>
                <Grid item xs={0} sm={2} />
            </Grid>
            <Grid item container xs={2} style={{"max-width": "100%", "max-height":"100%"}}>
                <Footer />
            </Grid>
        </Grid>
    );
}

export default App;