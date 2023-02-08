import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Box, Button, Fade, Grid, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { FormEditarFirma } from './FormEditarFirma';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ModalFirma = () => {

  const [openModalGestion, setOpenModalGestion] = useState(false)

  const handleOpen = () => setOpenModalGestion(true)
  const handleClose = () => setOpenModalGestion(false)

  return (
    <>
      <Button onClick={handleOpen} variant="contained">Gestionar Firma</Button>
      <Modal
        open={openModalGestion}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
      >
        <Fade in={openModalGestion}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Gestionar Firma
            </Typography>
            <Typography id="transition-modal-description">
              <Typography id='transition-modal-text-description' variant="body1" component="h3" >
                Elige el nuevo estado de la firma, segun corresponda
              </Typography>
              <Grid style={{ marginTop: '3em' }} >
                <FormEditarFirma handleClose={handleClose} />
              </Grid>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  )

} 