import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import InventoryForm from './InventoryForm.js'
import Grid from '@material-ui/core/Grid';


function InventoryEdit({openEdit, handleClose, post_id, listItems, handleOpenAlert}) {

    return (
    <Dialog 
        open={openEdit} 
        onClose={handleClose} 
        overlayStyle={{backgroundColor: 'transparent'}}
        aria-labelledby="form-dialog-title"
        aria-describedby="alert-dialog-description" 
        maxWidth="xs" 
        >

    <DialogTitle id="alert-dialog-title">
        <Grid container align="center">
            <Grid item xs>
                {"Edit This Item"}
            </Grid>
        </Grid>
    </DialogTitle>

    <Divider light />
    <DialogContent style={{marginTop:10}}>
      <Grid container justify="center">
        <InventoryForm
        action="edit"
        post_id={post_id}
        listItems={listItems}
        onClose={handleClose}
        handleOpenAlert={handleOpenAlert}
        />
    </Grid>
    </DialogContent>
  </Dialog>
    )
}

export default InventoryEdit