import React, {useState}from 'react';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  TextField
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Scrollbar, Products_Discount, Products_PriceDetails, Products_ProductDetails, SupplyChain_Add_Suppliers } from '../../../statelessViews';

export const AddSuppliers = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
    products
  } = props;

  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [supplierType, setSupplierType] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [gstNumber, setGstNumber] = useState("")
  const [notes, setNotes] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [contactNumber, setContactNumber] = useState("")
  const [productType, setProductType] = useState("")

  const handleStateChanges = (brname) => {
    debugger;
    //setBrandName(brname)
    localStorage.setItem('brandName', brname)
  }

  const tempSaveFirstName = (firstName) => {
    setFirstName(firstName)
    localStorage.setItem("firstName", firstName)
  }

  const tempSaveLastName = (lastName) => {
    setLastName(lastName)
    localStorage.setItem("lastName", lastName)
  }


  const tempSaveSupplierType = (supplierType) => {
    setSupplierType(supplierType)
    localStorage.setItem("supplierType", supplierType)
  }

  const tempSaveEmail = (email) => {
    setEmail(email);
    localStorage.setItem("email", email)
  }

  const tempSaveCity = (city) => {
    setCity(city);
    localStorage.setItem("city", city)
  }

  const tempSaveState = (state) => {
    setState(state);
    localStorage.setItem("state", state)
  }

  const tempSaveContactNumber = (contactNumber) => {
    setContactNumber(contactNumber);
    localStorage.setItem("contactNumber", contactNumber)
  }

  const tempSaveProductType = (productType) => {
    setProductType(productType);
    localStorage.setItem("productType", productType)
  }

  const tempSaveGSTNumber = (gstNumber) => {
    setGstNumber(gstNumber);
    localStorage.setItem("gstNumber", gstNumber)
  }

  const tempSaveCompanyName = (companyName) => {
    setCompanyName(companyName);
    localStorage.setItem("companyName", companyName)
  }


  return (
    <div style={{display: "flex", flexDirection: "row"}}>
    {/* <Card style={{marginRight: "20px"}}>
        <Box sx={{ minWidth: 300 }}>
        <TabContext value={value}>
          <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', 
                    height: "auto" , width: "min-content"}}>
            <Tabs
              orientation="vertical"
              value={value} 
              onChange={handleChange}
              indicatorColor='white'
              textColor="primary"
              aria-label="secondary tabs example"
              initialselectedindex={value}
              centered
            >
              <Tab value="1" label="Supplier Details" />
            </Tabs>
          </Box>
          </TabContext>
        </Box>
      
    </Card> */}
    <Card style={{minWidth: 1000}}>
      <Scrollbar>
        <Box >

        <SupplyChain_Add_Suppliers props={props} handleStateChanges={handleStateChanges} tempSaveFirstName={tempSaveFirstName}
                          tempSaveLastName={tempSaveLastName} tempSaveSupplierType={tempSaveSupplierType} 
                          tempSaveEmail={tempSaveEmail} tempSaveCity={tempSaveCity} tempSaveState={tempSaveState}
                          tempSaveContactNumber={tempSaveContactNumber} tempSaveProductType={tempSaveProductType}
                          tempSaveGSTNumber={tempSaveGSTNumber} tempSaveCompanyName={tempSaveCompanyName}/>
             
       {/*  <TabContext value={value}>
          <TabPanel value="1">
              <>
              <SupplyChain_Add_Suppliers props={props} handleStateChanges={handleStateChanges} tempSaveFirstName={tempSaveFirstName}
                          tempSaveLastName={tempSaveLastName} tempSaveSupplierType={tempSaveSupplierType} 
                          tempSaveEmail={tempSaveEmail} tempSaveCity={tempSaveCity} tempSaveState={tempSaveState}
                          tempSaveContactNumber={tempSaveContactNumber} tempSaveProductType={tempSaveProductType}
                          tempSaveGSTNumber={tempSaveGSTNumber} tempSaveCompanyName={tempSaveCompanyName}/>
              </>
          </TabPanel>
         
          </TabContext> */}
        </Box>
      </Scrollbar>
      {/* <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
    </div>
  );
};
