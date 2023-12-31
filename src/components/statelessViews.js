import React, {useState}from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InventoryIcon from '@mui/icons-material/Inventory';
import SimpleBar from 'simplebar-react';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import { brandNames, categoryNames, productTypes } from '../constants/commonConstants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Scrollbar = styled(SimpleBar)``;

export const ShowToasts = (toastMessage) => {
  toast(toastMessage);
}

export const AddProductDialogBox = (props) => {
    debugger;
    const [open, setOpen] = useState(props.open);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
      <Dialog open={open} onClose={props.close}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField id="outlined-search" label="Search field" type="search" />
            <TextField
              id="outlined-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
            />
          </div>
          <div>
            <TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              disabled
              id="filled-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <TextField
              id="filled-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
            <TextField
              id="filled-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <TextField
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
            />
            <TextField
              id="filled-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              disabled
              id="standard-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="standard"
            />
            <TextField
              id="standard-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="standard"
            />
          </div>
        </Box>
    </DialogContent>
    <DialogActions>
        <Button onClick={props.close}>Cancel</Button>
        <Button onClick={props.close}>Subscribe</Button>
    </DialogActions>
    </Dialog>
      </>
  )
}


const TypoTextGridItem = ({title, defaultValue, onChange, value}) => {
  var id = "outlined-"+ title.toLowerCase().replace(" ", "") + "-input"
  return(
    <>
      <Typography variant='subtitle2'>{title}</Typography>
      <TextField
          id={id}
          type="name"
          defaultValue={defaultValue}
          onChange={onChange}
          value={value || " "}
      /> 
    </>
  )
}

const TypoTextGridItemInput = ({title, defaultValue, onChange}) => {
  var id = "outlined-"+ title.toLowerCase().replace(" ", "") + "-input"
  return(
    <>
      <Typography variant='subtitle2'>{title}</Typography>
      <TextField
          id={id}
          type="name"
          defaultValue={defaultValue}
          onChange={onChange}
      /> 
    </>
  )
}

const SelectGridItem = ({title, handleFunc, value}) => {
    debugger;
    return(
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    value={value}
                    onChange={() => handleFunc}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}


export const Products_ProductDetails = (props) => {

  return(
      <>
            <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                  minWidth: 800
                }}
                noValidate
                autoComplete="off"
              >
              <div style={{marginTop: "20px"}}>
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item>
                      <Typography variant='subtitle2'>Brand</Typography>
                      <TextField
                        id="outlined-select-brand"
                        select
                        value={props.brandName}
                        defaultValue={localStorage.getItem("brandName")}
                        onChange={(e) => props.tempSaveBrand(e.target.value)}
                      >
                        {brandNames.map((item) => (
                            <MenuItem value={item.value} key={item.value}>{item.value}</MenuItem>
                          ))}
                      </TextField>
                    </Grid>

                    <Grid item>
                        <Typography variant='subtitle2'>Category</Typography>
                        <TextField
                          id="outlined-select-category"
                          select
                          value={props.brandName}
                          defaultValue={localStorage.getItem("category")}
                          onChange={(e) => props.tempSaveCategory(e.target.value)}
                        >
                          {categoryNames.map((item) => (
                                          <MenuItem value={item.value} key={item.value}>{item.value}</MenuItem>
                                        ))}
                        </TextField>
                    </Grid>

                    <Grid item>
                        {/* <TypoTextGridItem title="Product Name" defaultValue={localStorage.getItem("batchNumber") || " "}
                              onChange={(e) => props.tempSaveName(e.target.value)}/> */}

                          <>
                                <Typography variant='subtitle2'>Product Name</Typography>
                                <TextField
                                    id="outlined-productName-input"
                                    type="name"
                                    defaultValue={localStorage.getItem("productName") || " "}
                                    onChange={(e) => props.tempSaveName(e.target.value)}
                                /> 
                              </>
                     </Grid>

                </Grid>    
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      
                     <Grid item>
                        <TypoTextGridItemInput title="Batch Number" defaultValue={localStorage.getItem("batchNumber")} 
                                            onChange={(e) => props.tempSaveBatchNumber(e.target.value)}/>
                     </Grid>
                     <Grid item>
                        <TypoTextGridItemInput title="OEM" defaultValue={localStorage.getItem("oem")} 
                                            onChange={(e) => props.tempSaveOem(e.target.value)}/>
                     </Grid>

                     <Grid item>
                      <TypoTextGridItemInput title="HSN Code" defaultValue={localStorage.getItem("hsnCode")}
                                          onChange={(e) => props.tempSaveHsnCode(e.target.value)}/>
                     </Grid>
                  </Grid>

                  <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      <Grid item>
                        <TypoTextGridItemInput title="Manufacturer" defaultValue={localStorage.getItem("manufacturer")} 
                                                onChange={(e) => props.tempSaveManufacturer(e.target.value)}/>
                      </Grid>

                      <Grid item>
                        <TypoTextGridItemInput title="Unit Rate" defaultValue={localStorage.getItem("unitRate")} 
                                                onChange={(e) => props.tempSaveUnitRate(e.target.value)}/>
                      </Grid>

                     <Grid item>
                        <TypoTextGridItemInput title="GST Percentage" defaultValue={localStorage.getItem("gst")}
                        onChange={(e) => props.tempSaveGstPercentage(e.target.value)}/>
                      </Grid>
                </Grid>
              </div>
          </Box>
    </>
  )
}

export const Inventory_AddInventory = (props) => {

  const [batchNumber, setBatchNumber] = useState("")
  const [oem, setOem] = useState("")
  const [hsnCode, setHsnCode] = useState("")
  const [totalQuantity, setTotalQuantity] = useState("")

  const handleProductNameChange = (productName) => {
    debugger;
    const selectedProduct = props.products.find(product => product.productName === productName);
    
    setBatchNumber(selectedProduct.batchNumber)
    localStorage.setItem("batchNumber", selectedProduct.batchNumber)
    
    setOem(selectedProduct.oem)
    localStorage.setItem("oem", selectedProduct.oem)

    setHsnCode(selectedProduct.hsnCode)
    localStorage.setItem("hsnCode", selectedProduct.hsnCode)
  }

  return(
      <>
            <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                  minWidth: 800
                }}
                noValidate
                autoComplete="off"
              >
              <div style={{marginTop: "20px"}}>
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* <Grid item>
                      <Typography variant='subtitle2'>Brand</Typography>
                      <TextField
                        id="outlined-select-brand"
                        select
                        value={props.brandName}
                        defaultValue={localStorage.getItem("brandName")}
                        onChange={(e) => props.tempSaveBrand(e.target.value)}
                      >
                        {brandNames.map((item) => (
                            <MenuItem value={item.value} key={item.value}>{item.value}</MenuItem>
                          ))}
                      </TextField>
                    </Grid>

                    <Grid item>
                        <Typography variant='subtitle2'>Category</Typography>
                        <TextField
                          id="outlined-select-category"
                          select
                          value={props.brandName}
                          defaultValue={localStorage.getItem("category")}
                          onChange={(e) => props.tempSaveCategory(e.target.value)}
                        >
                          {categoryNames.map((item) => (
                                          <MenuItem value={item.value} key={item.value}>{item.value}</MenuItem>
                                        ))}
                        </TextField>
                    </Grid> */}

                    <Grid item>
                      <Typography variant='subtitle2'>Products</Typography>
                      <TextField
                        id="outlined-select-brand"
                        select
                        value={props.name}
                        defaultValue={localStorage.getItem("productName")}
                        onChange={(e) => {
                            props.tempSaveName(e.target.value)
                            handleProductNameChange(e.target.value)
                        }}
                      >
                        {props.products.map((item) => (
                            <MenuItem value={item.productName} key={item.productName}>{item.productName}</MenuItem>
                          ))}
                      </TextField>
                    </Grid>

                    <Grid item>
                        <>
                          <Typography variant='subtitle2'>Batch Number</Typography>
                          <TextField
                              id="outlined-batchNumber-input"
                              type="name"
                              defaultValue=" " value={batchNumber || " "}
                              onChange={() => props.tempSaveModelNumber(batchNumber)}
                          /> 
                        </>
                     </Grid>

                   {/*  <Grid item>
                        <TypoTextGridItem title="Product Name" defaultValue={localStorage.getItem("productName")} 
                              onChange={(e) => props.tempSaveName(e.target.value)}/>
                     </Grid> */}

                </Grid>    
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                     <Grid item>
                        <TypoTextGridItem title="OEM" defaultValue=" " value={oem || " "}
                                            onChange={(e) => props.tempSaveOem(oem)}/>
                     </Grid>
                     <Grid item>
                      <TypoTextGridItem title="HSN Code" defaultValue=" " value={hsnCode || " "}
                                          onChange={() => props.tempSaveHsnCode(hsnCode)}/>
                     </Grid>
                  </Grid>

                  <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {/* <Grid item>
                      <Typography variant='subtitle2'>Unit-Type</Typography>
                      <TextField
                        id="outlined-select-unitType"
                        select
                        defaultValue={localStorage.getItem("unitType")}
                      >
                            {dummyData.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                      </Grid>
                    <Grid item>
                            <TypoTextGridItem title="Warranty In Months" defaultValue={localStorage.getItem("warranty")}
                                                onChange={(e) => props.tempSaveWarranty(e.target.value)}/>
                    </Grid> */}

                   {/*  <Grid item>
                     <TypoTextGridItem title="Total Quantity" defaultValue={localStorage.getItem("totalQuantity")} 
                                            onChange={(e) => props.tempSaveTags(e.target.value)}/>
                     </Grid> */}

                     <Grid item>
                     <>
                        <Typography variant='subtitle2'>Total Quantity</Typography>
                        <TextField
                            id="outlined-totalQuantity-input"
                            type="name"
                            defaultValue={localStorage.getItem("totalQuantity")}
                            onChange={(e) => props.tempSaveTotalQuantity(e.target.value)}
                            //value={value || " "}
                        /> 
                      </>
                     </Grid>
                </Grid>

                


                {/* <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                     <Grid item>
                      <TypoTextGridItem title="Specification" defaultValue={localStorage.getItem("specification")}
                                          onChange={(e) => props.tempSaveSpecification(e.target.value)}/>
                    </Grid>

                    <Grid item>
                        <TypoTextGridItem title="Unit Rate" defaultValue={localStorage.getItem("unitRate")}
                                            onChange={(e) => props.tempSaveUnitRate(e.target.value)}/>

                    </Grid>
                      <Grid item>
                        <TypoTextGridItem title="GST Percentage" defaultValue={localStorage.getItem("gst")}
                            onChange={(e) => props.tempSaveGstPercentage(e.target.value)}/>
                      </Grid>

                    
                  </Grid>  */}
              </div>
          </Box>
    </>
  )
}

export const SupplyChain_Add_Suppliers = (props) => {
  debugger;
  return(
      <>
            <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
              <div>
                
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item>
                    <TypoTextGridItem title="Name" defaultValue={localStorage.getItem("name")} 
                                            onChange={(e) => props.tempSaveName(e.target.value)}/>
                     </Grid>

                     <Grid item>
                      <TypoTextGridItem title="Company Name" defaultValue={localStorage.getItem("companyName")} 
                                            onChange={(e) => props.tempSaveCompanyName(e.target.value)}/>
                     </Grid>

                     <Grid item>
                            <Typography variant='subtitle2'>Supplier Type</Typography>
                            <TextField
                              id="outlined-select-discount-type"
                              select
                              defaultValue={localStorage.getItem("supplierType")} 
                              onChange={(e) => props.tempSaveSupplierType(e.target.value)}
                            >
                              {props.allSupplierTypes.map((option) => (
                                <MenuItem key={option.type} value={option.type}>
                                  {option.type}
                                </MenuItem>
                              ))}
                            </TextField>
                        </Grid>
                </Grid>    

                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                     
                       

                     <Grid item>
                      <TypoTextGridItem title="Email" defaultValue={localStorage.getItem("email")} 
                                            onChange={(e) => props.tempSaveEmail(e.target.value)}/>
                     </Grid>

                     <Grid item>
                      <TypoTextGridItem title="City" defaultValue={localStorage.getItem("city")} 
                                            onChange={(e) => props.tempSaveCity(e.target.value)}/>
                     </Grid>

                     <Grid item>
                      <TypoTextGridItem title="State" defaultValue={localStorage.getItem("state")} 
                                            onChange={(e) => props.tempSaveState(e.target.value)}/>
                     </Grid>
                  </Grid>
                  
                 

                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                     <Grid item>
                      <TypoTextGridItem title="Contact Number" defaultValue={localStorage.getItem("contactNumber")} 
                                            onChange={(e) => props.tempSaveContactNumber(e.target.value)}/>
                     </Grid>
                     <Grid item>
                      <TypoTextGridItem title="GST Number" defaultValue={localStorage.getItem("gstNumber")} 
                                            onChange={(e) => props.tempSaveGSTNumber(e.target.value)}/>
                     </Grid>
                     <Grid item>
                            <Typography variant='subtitle2'>Product Type</Typography>
                            <TextField
                              id="outlined-select-discount-type"
                              select
                              defaultValue={localStorage.getItem("productType")} 
                              onChange={(e) => props.tempSaveProductType(e.target.value)}
                            >
                              {productTypes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                        </Grid>
                </Grid>
              </div>
          </Box>
    </>
  )
}

export const SupplyChain_Dashboard = (props) => {

  const theme = useTheme();
  return (
    <>
        <Card sx={{ display: 'flex' , maxWidth: 345, width: "100%", marginRight: 5,  justifyContent: "center", alignItems: "center", backgroundColor: "#C7F1DD"}}>
          
          <InventoryIcon />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 1 auto' }}>
              <Typography component="div" variant="h5">
                0
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {props.title}
              </Typography>
            </CardContent>
          </Box>
          
    </Card>
    </>
  )
}

export const SupplyChain_Dashboard_UpdatesCard = (props) => {

  const data = [
    { icon: <People />, label: 'Supplies', count: "0" },
    { icon: <Dns />, label: 'Raw materials', count: "0" },
    { icon: <PermMedia />, label: 'Product', count: props.totalProducts },
    { icon: <Public />, label: 'Open Order', count: "0" },
  ];

  const UpdatesNav = styled(List)({
    '& .MuiListItemButton-root': {
      paddingLeft: 24,
      paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
      fontSize: 20,
    },
    backgroundColor: "#C7F1DD",
    borderRadius: "4px"
  });

  const [open, setOpen] = React.useState(true);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return(
    <>
    <Box sx={{ display: 'flex', marginTop: "20px" , marginRight: "15px"}}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'dark',
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: 'rgb(5, 30, 52)' },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <UpdatesNav component="nav" disablePadding>
            <div style={{display: "flex", flexDirection: "row"}}>
              <ListItemButton component="a" href="#customized-list">
                <ListItemText
                  sx={{ my: 0 , color: "black"}}
                  primary="Updates"
                  primaryTypographyProps={{fontSize: 20, fontWeight: 'medium', letterSpacing: 0}}
                />
              </ListItemButton>

              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label" style={{color: "black"}}>Months</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Months"
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Last Month</MenuItem>
                    <MenuItem value={2}>Last 2</MenuItem>
                    <MenuItem value={6}>Last 6</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                pb: open ? 2 : 0,
              }}
            >
              
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 50, color: 'black' }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                    <ListItemText
                      primary={item.count}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </UpdatesNav>
        </Paper>
      </ThemeProvider>
    </Box>
</>
  )
}

export const SupplyChain_Dashboard_Chip = () => {

  const StyledChip = styled(Chip)({
    justifyContent: "flex-start",
    backgroundColor: "#C7F1DD",
    borderRadius: "4px"
  });

  return (
    <Box sx={{ marginTop: "20px" }}>   
      <Stack direction="column" spacing={1} style={{width: "240px"}}>
        <StyledChip label="Emergency" variant="outlined"/>
        <StyledChip label="Critical" variant="outlined" />
        <StyledChip label="Non-Critical" variant="outlined" />
    </Stack>
    </Box>
  )
}