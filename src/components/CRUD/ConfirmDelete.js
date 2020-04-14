import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import Cookies from 'js-cookie'
import Divider from '@material-ui/core/Divider';


function ConfirmDelete({open, handleClose, post_id}) {

    const handleDelete= (post_id) => {
          axios.delete("http://localhost:8000/api/property/" + post_id, {headers: {"Authorization":"Bearer " + Cookies.get("token")}})
          .then(response => {
              console.log(response)
          })
          .catch(error =>{
              console.log(error)
          })
    }

    return (
    <Dialog 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
        aria-describedby="alert-dialog-description" 
        maxWidth="sm" 
        fullWidth="true"
    >
    <DialogTitle id="alert-dialog-title">
                  {"Are you sure you want to delete?"}
    </DialogTitle>
    <Divider light />
    <DialogContent>
    <DialogContentText id="alert-dialog-description">
            This action will permanently delete this property entry from your records. 
    </DialogContentText>
    </DialogContent>
    <DialogActions>
    <Button
          onClick={() => handleClose(false)}
          color="default">
            Cancel
    </Button>
    <Button
          onClick={() => {handleClose(false)
                        handleDelete(post_id)
                    }
                }
          color="primary">
            Confirm
    </Button>
    </DialogActions>
  </Dialog>
    )
}

export default ConfirmDelete