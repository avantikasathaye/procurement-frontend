import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Logo } from './Logo';
import LoginImage from '../assets/LoginImage.png'

// TODO: Change subtitle text

const AuthLayout = (props) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        marginTop: "20px"
      }}
    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%'
            }}
          >
            <Box
              /* component={NextLink} */
              href="/"
              sx={{
                display: 'inline-flex',
                height: 32,
                width: 32
              }}
            >
              {/* <Logo /> */}
            </Box>
          </Box>
          {children}
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
           /*  background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)', */
           background: '#E5FEF2',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%'
            }
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                mb: 10
              }}
              variant="h1"
            >
              
              <Box
                component="a"
                sx={{ color: '#3D808C' }}
                target="_blank"
              >
                Welcome to{' '} Semamart Procurement Software
              </Box>
            </Typography>
            {/* <Typography
              align="center"
              sx={{ mb: 3 }}
              variant="subtitle1"
            >
              Your professional Inventory Management System and One Stop Shop for all your Medical Supplies
            </Typography> */}
            <img
              alt=""
              src={LoginImage}
              width="550"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthLayout