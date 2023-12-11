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
  TextField,
  Button
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Scrollbar, Products_Discount, Products_PriceDetails, Products_ProductDetails } from '../../statelessViews';
import { addNewProduct, listProducts } from '../../../actions/productActions';
import { useDispatch } from 'react-redux';
import { useAsyncError } from 'react-router-dom';


export const AddProducts = (props) => {
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

  const [brandName, setBrandName] = useState("")
  const [category, setCategory] = useState("")
  const [productName, setProductName] = useState("")
  const [batchNumber, setBatchNumber] = useState("")
  const [oem, setOem] = useState("")
  const [hsnCode, setHsnCode] = useState("")
  const [unitRate, setUnitRate] = useState("")
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

  const [gstPercentage, setGstPercentage] = useState("")

  const [price, setPrice] = useState("")
  const [priceWithGst, setPriceWithGst] = useState("")
  const [priceWithoutGst, setPriceWithoutGst] = useState("")
  const [purchaseRate, setPurchaseRate] = useState("")
  const [dealerDiscountRate, setDealerDiscountRate] = useState("")
  const [dealerDiscount, setDealerDiscount] = useState("")
  const [profitMarginType, setProfitMarginType] = useState("")



  const tempSaveBrand = (brname) => {
    debugger;
    setBrandName(brname)
    localStorage.setItem('brandName', brname)
  }

  const tempSaveCategory = (category) => {
    setCategory(category);
    localStorage.setItem("category", category)
  }

  const tempSaveName = (productName) => {
    setCategory(productName);
    localStorage.setItem("productName", productName)
  }

  const tempSaveOem = (oem) => {
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

  const tempSaveSkuCode = (skuCode) => {
    setSkuCode(skuCode);
    localStorage.setItem("skuCode", skuCode)
  }

  const tempSaveManufacturer = (manufacturer) => {
    setUnitType(manufacturer);
    localStorage.setItem("manufacturer", manufacturer)
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

  const tempSaveUnitRate = (unitRate) => {
    setUnitRate(unitRate)
    localStorage.setItem("unitRate", unitRate)
  }

  const tempSaveGstPercentage = (gst) => {
    setUnitRate(gst)
    localStorage.setItem("gst", gst)
  }

  const handleSaveProduct = () => {
    const newProductData = {
      "brand": localStorage.getItem("brandName"),
      "category" : localStorage.getItem("category"),
      "productName": localStorage.getItem("name"),
      "manufacturer": localStorage.getItem("manufacturer"),
      "modelNumber": localStorage.getItem("modelNumber"),
      "oem": localStorage.getItem("oem"),
      "hsnCode": localStorage.getItem("hsnCode"),
      "unitRate": localStorage.getItem("unitRate"),
      "gst": localStorage.getItem("gst")
    }

    dispatch(addNewProduct(newProductData));
  }

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
    <Card style={{marginRight: "20px"}}>
        {/* <Box sx={{ minWidth: 300 }}>
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
                <Tab value="1" label="Product Details" />
                <Tab value="2" label="Price Details" />
                <Tab value="3" label="Discount" />
              </Tabs>
            </Box>
          </TabContext>
        </Box> */}
      
    </Card>
    <Card style={{minWidth: 1000}}>
      <Scrollbar>
        <Box >

        <Products_ProductDetails props={props} tempSaveBrand={tempSaveBrand} tempSaveCategory={tempSaveCategory}
                    tempSaveName={tempSaveName} tempSaveOem={tempSaveOem} tempSaveHsnCode={tempSaveHsnCode} 
                    tempSaveBatchNumber={tempSaveBatchNumber} tempSaveSize={tempSaveSize} tempSaveSkuCode={tempSaveSkuCode}
                    tempSaveManufacturer={tempSaveManufacturer} tempSaveWarranty={tempSaveWarranty}
                    tempSaveSpecification={tempSaveSpecification} tempSaveUnitRate={tempSaveUnitRate} 
                    tempSaveGstPercentage={tempSaveGstPercentage} onClickAdd={props.onAdd}/>

                    
        {/* <TabContext value={value}>
          <TabPanel value="1">
              <>
              <Products_ProductDetails props={props} tempSaveBrand={tempSaveBrand} tempSaveCategory={tempSaveCategory}
                    tempSaveName={tempSaveName} tempSaveOem={tempSaveOem} tempSaveHsnCode={tempSaveHsnCode} 
                    tempSaveModelNumber={tempSaveModelNumber} tempSaveSize={tempSaveSize} tempSaveSkuCode={tempSaveSkuCode}
                    tempSaveUnitType={tempSaveUnitType} tempSaveTags={tempSaveTags} tempSaveWarranty={tempSaveWarranty}
                    tempSaveSpecification={tempSaveSpecification} tempSaveUnitRate={tempSaveUnitRate} 
                    tempSaveGstPercentage={tempSaveGstPercentage} onClickAdd={props.onAdd}/>
              </>
          </TabPanel>
          <TabPanel value="2">
              <>
              <Products_PriceDetails />
              </>
          </TabPanel>
          <TabPanel value="3">
            <>
            <Products_Discount />
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
