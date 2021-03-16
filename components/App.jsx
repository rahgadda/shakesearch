function App() {
    return (
        <div>
            <Grid container direction="column">
                <Grid item container>
                    <Header />
                </Grid>
                <Grid item container>
                    <Grid item xs={0} sm={2} />
                    <Grid item xs={12} sm={8} container> 
                        <Body />
                    </Grid>
                    <Grid item xs={0} sm={2} />
                </Grid>
                <Grid item container>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;