import React, {useState} from 'react';
import { styled, useTheme, withStyles, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { brandKit } from '../../theme/colors';
import { useLocation } from 'react-router-dom';
import SemaIcon from '../../assets/LogoSema02.png'
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Collapse from '@mui/material/Collapse';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from 'react-router-dom'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TuneIcon from '@mui/icons-material/Tune';
import PeopleIcon from '@mui/icons-material/People';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AssessmentIcon from '@mui/icons-material/Assessment';

const drawerWidth = 240;

const mytheme = createTheme({
  typography: {
    
    h6: {
      color: "black"
    }
  }
});

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: brandKit.sideNav
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  backgroundColor: brandKit.sideNav
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  backgroundColor: brandKit.sideNav
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: brandKit.sideNav
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    backgroundColor: brandKit.sideNav,
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',

    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    
  }),
);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MiniDrawer ({children}){
  //const pathname = usePathname();
  let location = useLocation();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [menuOpen, setMenuOpen] = useState(true);

  const handle_Click = ( item ) => {
   setMenuOpen(!menuOpen)
  }

  

  return (
    <ThemeProvider theme={mytheme}>
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{color: "black"}}>
        <Toolbar>
          <div className='leftMenuItems'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <img
                src={SemaIcon}
                alt="Icon"
                className="rounded mr-2 brandName"
                width="30"
                height="20"
                style={{marginBottom: "5px", marginRight: "5px"}}
                  />{" "}
            <Typography variant="h6" noWrap component="div">
              Semamart Procurement Software
            </Typography>
          </div>
          
          <div className='rightMenuItems' style={{display:'flex'}}>
            <Button style={{color: 'black'}} onClick={handleOpenModal}><HelpIcon /></Button>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{backgroundColor: brandKit.topNav}}>
                  FAQs
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Show Semamart Procurement Software FAQs here ! 
                </Typography>
              </Box>
            </Modal>
            
            <Button style={{color: 'black'}} 
              id="basic-button"
              aria-controls={openMenu ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
              onClick={handleClick}> <PersonIcon /> 
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>User Profile</MenuItem>
              <MenuItem onClick={handleClose}>User Settings</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
          
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
       
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: brandKit.sideNav }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton>
                  <ListItemIcon><SendIcon /></ListItemIcon>
                  <ListItemText primary="Overview" />
                </ListItemButton>
                
                <ListItemButton component={Link} to="/products">
                    <ListItemIcon><DraftsIcon /></ListItemIcon>
                    <ListItemText primary="Products" />
                </ListItemButton>
                
                <ListItemButton onClick={handle_Click}>
                  <ListItemIcon><InboxIcon /></ListItemIcon>
                  <ListItemText primary="Supply Chain" />
                  {menuOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                
                <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dashboard" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} component={Link} to="/inventory">
                      <ListItemIcon>
                        <InventoryIcon />
                      </ListItemIcon>
                      <ListItemText primary="Inventory" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <ListAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="Orders" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <ListAltIcon />
                      </ListItemIcon>
                      <ListItemText primary="Purchase Orders" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <TuneIcon />
                      </ListItemIcon>
                      <ListItemText primary="Setup" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }} component={Link} to="/suppliers">
                      <ListItemIcon>
                        <PeopleIcon />
                      </ListItemIcon>
                      <ListItemText primary="Suppliers"/>
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <AssessmentIcon />
                      </ListItemIcon>
                      <ListItemText primary="Reports" />
                    </ListItemButton>

                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <SummarizeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Summary" />
                    </ListItemButton>

                  </List>
                </Collapse>
              </List>
        
       {/*  <Divider /> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1}}>
        {children}
      </Box>
    </Box>
    </ThemeProvider>
  );
}