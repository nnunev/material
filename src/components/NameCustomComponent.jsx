import { Avatar, Grid } from '@material-ui/core';

const NameCustomComponent = ({row}) => {

    return <Grid container alignItems="center">
        <>
        <Grid item sm={3}>
            <Avatar style={{ alignItems:"left", backgroundColor: "grey" }}>{row.name[0]}</Avatar>
        </Grid>
        <Grid item>
            <p>{row.name}</p>
            <p>{row.email}</p>
        </Grid>
        </>
    </Grid>
}

export default NameCustomComponent