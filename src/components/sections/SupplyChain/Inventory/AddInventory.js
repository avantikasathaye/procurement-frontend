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
  const [modelNumber, setModelNumber] = useState("")
  const [oem, setOem] = useState("")
  const [hsnCode, setHsnCode] = useState("")
  const [salesRate, setSalesRate] = useState("")
  const [gst, setGst] = useState("")
  const [size, setSize] = useState("")
  const [skuCode, setSkuCode] = useState("")
  const [unitType, setUnitType] = useState("")
  const [warranty, setWarranty] = useState("")
  const [tags, setTags] = useState("")
  const [specification, setSpecification] = useState("")
  const [unitRateIncGst, setUnitRateIncGst] = useState("")
  const [unitRateExcGst, setUnitRateExcGst] = useState("")
  const [discountStartDate, setDiscountStartDate] = useState("")
  const [discountEndDate, setDiscountEndDate] = useState("")
  const [discountType, setDiscountType] = useState("")
  const [discountValue, setDiscountValue] = useState("")
  const [discountStatus, setDiscountStatus] = useState("")

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
    setCategory(name);
    localStorage.setItem("name", name)
  }

  const tempSaveOem = (oem) => {
    setOem(oem);
    localStorage.setItem("oem", oem)
  }

  const tempSaveModelNumber = (modelNumber) => {
    setModelNumber(modelNumber);
    localStorage.setItem("modelNumber", modelNumber)
  }

  const tempSaveHsnCode = (hsnCode) => {
    setHsnCode(hsnCode);
    localStorage.setItem("hsnCode", hsnCode)
  }

  const tempSaveSkuCode = (skuCode) => {
    setSkuCode(skuCode);
    localStorage.setItem("skuCode", skuCode)
  }

  const tempSaveUnitType = (unitType) => {
    setUnitType(unitType);
    localStorage.setItem("unitType", unitType)
  }

  const tempSaveSize = (size) => {
    setSize(size);
    localStorage.setItem("size", size)
  }

  const tempSaveWarranty = (warranty) => {
    setWarranty(warranty);
    localStorage.setItem("warranty", warranty)
  }

  const tempSaveTags = (tags) => {
    setTags(tags)
    localStorage.setItem("tags", tags)
  }

  const tempSaveSpecification = (specification) => {
    setSpecification(specification)
    localStorage.setItem("specification", specification)
  }

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <Card style={{minWidth: 1000}}>
        <Scrollbar>
          <Box>
            <Inventory_AddInventory props={props} handleStateChanges={handleStateChanges} tempSaveCategory={tempSaveCategory}
                      tempSaveName={tempSaveName} tempSaveOem={tempSaveOem} tempSaveHsnCode={tempSaveHsnCode} 
                      tempSaveModelNumber={tempSaveModelNumber} tempSaveSize={tempSaveSize} tempSaveSkuCode={tempSaveSkuCode}
                      tempSaveUnitType={tempSaveUnitType} tempSaveTags={tempSaveTags} tempSaveWarranty={tempSaveWarranty}
                      tempSaveSpecification={tempSaveSpecification}/>
          </Box>
        </Scrollbar>
      </Card>
    </div>
  );
};
