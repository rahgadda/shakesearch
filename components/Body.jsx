function Body(){
    return (
        <Grid container direction="column" spacing={2}>
            <Grid item xs={1} /> 
            <Grid item xs={2} container style={{"max-width": "100%"}}>
                Search Box
            </Grid> 
            <Grid item xs={2} /> 
            <Grid item xs={6} container style={{"max-width": "100%"}}>
                Result
            </Grid> 
            <Grid item xs={1} />
        </Grid>
    );
}

export default Body;