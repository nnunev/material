import { Grid } from "@material-ui/core";

const UserComponent = ({ row }) => {
  return (
    <Grid alignItems="center">
      <>
        <p>{row.name}</p>

        <p>{row.email}</p>
      </>
    </Grid>
  );
};

export default UserComponent;
