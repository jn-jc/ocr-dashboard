import { Button, Modal, Box, Typography, Fade, Grid } from "@mui/material"
import { useState } from "react"
import { FormEditarEstado } from "./FormEditarEstado";


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


export const ModalGestion = () => {

  const [openModalGestion, setOpenModalGestion] = useState(false)

  const handleOpen = () => setOpenModalGestion(true)
  const handleClose = () => setOpenModalGestion(false)

  return (
    <div style={{marginRight: '1em'}}>
      <Button onClick={handleOpen} variant="outlined">Gestionar Registro</Button>
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
              Gestionar Registro
            </Typography>
            <Typography id="transition-modal-description">
              <Typography id='transition-modal-text-description' variant="body1" component="h3" >
                Selecciona el nuevo estado del registro, segun corresponda
              </Typography>
              <Grid style={{marginTop: '3em'}} >
                <FormEditarEstado />
              </Grid>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
