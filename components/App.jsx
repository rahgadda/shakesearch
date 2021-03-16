function App() {
    return (
        <div>
            <Grid container direction="column">
                <Grid item>
                    <Header />
                </Grid>
                <Grid item container>
                    <Grid item xs={0} sm={2} />
                    <Grid item xs={12} sm={8}> Body </Grid>
                    <Grid item xs={0} sm={2} />
                </Grid>
                <Grid item>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;