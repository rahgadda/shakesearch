function Header(){
    return (
        <Grid container direction="row" spacing={2}>
            <Grid item xs={10} /> 
            <Grid item xs={1}>
                LOV1
            </Grid> 
            <Grid item xs={1}>
                LOV2
            </Grid> 
        </Grid>
    );
}

export default Header;