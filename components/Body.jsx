function Body(){
    return (
        <Grid container direction="column" spacing={2} alignItems="stretch">
            <Grid item xs={1} /> 
            <Grid item xs={2}>
                Search Box
            </Grid> 
            <Grid item xs={2} /> 
            <Grid item xs={6}>
                Result
            </Grid> 
            <Grid item xs={1} />
        </Grid>
    );
}

export default Body;