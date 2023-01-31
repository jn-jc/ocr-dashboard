import { Button, CircularProgress } from "@mui/material"


export const LoadingButton = ({ isLoading, labelButton }: any) => {
  if (isLoading) {
    return (
      <CircularProgress style={{marginTop: 20, marginRight: 20}}/>
    )
  }
  else {
    return (
      <Button variant="contained" disableElevation type='submit'>
        {labelButton}
      </Button>
    )
  }
}
