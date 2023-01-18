import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

export const ButtonStyled = styled(Button)(() => ({
  fontFamily: 'Montserrat, sans-serif',
  '& a': { textDecoration: 'none', color: '#363636' },
}))
