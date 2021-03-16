
export default function App() {
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
            </Grid>
        </div>
    );
}