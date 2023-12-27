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
import { Scrollbar, Products_Discount, Products_PriceDetails, Products_ProductDetails, Inventory_AddInventory } from '../../../statelessViews';

export const AddInventory = (props) => {
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

  const [brandName, setBrandName] = useState("")
  const [category, setCategory] = useState("")
  const [name, setName] = useState("")
  const [batchNumber, setBatchNumber] = useState("")
  const [oem, setOem] = useState("")
  const [hsnCode, setHsnCode] = useState("")
  const [equipmentType, setEquipmentType] = useState("")
  const [totalConsumedQuantity, setTotalConsumedQuantity] = useState("")
  const [totalQuantity, setTotalQuantity] = useState("")

  const handleStateChanges = (brname) => {
    debugger;
    setBrandName(brname)
    localStorage.setItem('brandName', brname)
  }

  const tempSaveCategory = (category) => {
    setCategory(category);
    localStorage.setItem("category", category)
  }

  const tempSaveName = (name) => {
    console.log("in tempSaveName")
    setCategory(name);
    localStorage.setItem("name", name)
  }

  const tempSaveOem = (oem) => {
    console.log("in tempSaveOem: " + oem)
    debugger;
    setOem(oem);
    localStorage.setItem("oem", oem)
  }

  const tempSaveBatchNumber = (batchNumber) => {
    setBatchNumber(batchNumber);
    localStorage.setItem("batchNumber", batchNumber)
  }

  const tempSaveHsnCode = (hsnCode) => {
    setHsnCode(hsnCode);
    localStorage.setItem("hsnCode", hsnCode)
  }

  const tempSaveTotalConsumedQuantity = (totalConsumedQuantity) => {
    setTotalConsumedQuantity(totalConsumedQuantity)
    localStorage.setItem("totalConsumedQuantity", totalConsumedQuantity)
  }

  const tempSaveTotalQuantity = (totalQuantity) => {
    setTotalQuantity(totalQuantity)
    localStorage.setItem("totalQuantity", totalQuantity)
  }

  const tempSaveEquipmentType = (equipmentType) => {
    setEquipmentType(equipmentType)
    localStorage.setItem(equipmentType)
  }

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <Card style={{minWidth: 1000}}>
        <Scrollbar>
          <Box>
            <Inventory_AddInventory props={props} products={props.products} handleStateChanges={handleStateChanges} tempSaveCategory={tempSaveCategory}
                      tempSaveName={tempSaveName} tempSaveOem={tempSaveOem} tempSaveHsnCode={tempSaveHsnCode} 
                      tempSaveBatchNumber={tempSaveBatchNumber} tempSaveTotalQuantity={tempSaveTotalQuantity}
                      tempSaveTotalConsumedQuantity={tempSaveTotalConsumedQuantity} 
                      tempSaveEquipmentType={tempSaveEquipmentType}
                      onClickAdd={props.onAdd}/>
          </Box>
        </Scrollbar>
      </Card>
    </div>
  );
};
