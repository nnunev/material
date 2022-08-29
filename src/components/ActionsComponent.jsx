
import { Grid } from '@material-ui/core';
//import {DeleteIcon, SettingsIcon} from '@mui/icons-material';
import { FaTrash, FaCog } from 'react-icons/fa'

const ActionsComponent = ({id}) => {



    return <Grid container alignItems="center">
        <Grid item sm={3}>
            <button className='btn btn-light' href={`/user/${id}`}>
                <FaCog />
            </button>
        </Grid>
        <Grid item>
            <button
                //   type="button"
                //   className="btn btn-sm"
                //   data-bs-toggle="modal"
                //   data-bs-target="#deleteUserModal"
                >
                <FaTrash />
            </button>
        </Grid> 
    </Grid>
}

export default ActionsComponent

