import { Avatar, Grid } from "@material-ui/core";

const NameCustomComponent = ({ name }) => {
  return (
    <Grid container alignItems="center">
      <Grid item sm={3}>
        <Avatar style={{ alignItems: "left", backgroundColor: "grey" }}>
          {name[0]}
        </Avatar>
      </Grid>
    </Grid>
  );
};

export default NameCustomComponent;
