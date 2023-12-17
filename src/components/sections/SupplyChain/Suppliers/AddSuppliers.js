import React, {useEffect, useState}from 'react';
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
import { useDispatch, useSelector } from 'react-redux';

import {  getAllSupplierTypes } from '../../../../actions/supplyChainActions';

export const AddSuppliers = (props) => {

  const dispatch = useDispatch();

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
    localStorage.setItem('brandName', brname)
  }

  const tempSaveName = (name) => {
    setFirstName(firstName)
    localStorage.setItem("name", name)
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
    <Card style={{minWidth: 1000}}> 
      <Scrollbar>
        <Box>
        <SupplyChain_Add_Suppliers props={props} handleStateChanges={handleStateChanges} tempSaveName={tempSaveName} 
                          tempSaveSupplierType={tempSaveSupplierType} 
                          tempSaveEmail={tempSaveEmail} tempSaveCity={tempSaveCity} tempSaveState={tempSaveState}
                          tempSaveContactNumber={tempSaveContactNumber} tempSaveProductType={tempSaveProductType}
                          tempSaveGSTNumber={tempSaveGSTNumber} tempSaveCompanyName={tempSaveCompanyName} onClickAdd={props.onAdd}
                          allSupplierTypes = {props.supplierTypes}/>
        </Box>
      </Scrollbar>
    </Card>
    </div>
  );
};
