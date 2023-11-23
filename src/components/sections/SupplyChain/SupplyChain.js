import React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from '../../../hooks/use-selection';
import { ProductsTable } from '../ProductsTables';
import { AddProductDialogBox, SupplyChain_Dashboard_Chip, SupplyChain_Dashboard_UpdatesCard } from '../../statelessViews';
import { AddProducts } from '../AddProducts';
import { listProducts } from '../../../actions/productActions';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Scrollbar } from '../../scrollBar';
import { Products_Discount, Products_PriceDetails, Products_ProductDetails, SupplyChain_Dashboard } from '../../statelessViews';
import Products from '../Products';

const SupplyChain = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [showAddProductDialog, setShowAddProductDialog] = useState(false);
    const [showAddProductsForm, setShowAddProductsForm] = useState(false);

  const handleAddAndSave = () => {
    setShowAddProductsForm(!showAddProductsForm)
  }

  const productList = useSelector(state => state.productList)
  const { products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 12
    }}>
        <Container maxWidth="lg">
       <div style={{display: "flex", flexDirection: "row"}}>
        <Card style={{marginRight: "20px"}}>
            <Box sx={{ minWidth: 300 }}>
            <TabContext value={value}>
            <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "auto",  width: "min-content" }}>
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
                <Tab value="1" label="Dashboard" />
                <Tab value="2" label="Inventory" />
                <Tab value="3" label="Orders" />
                <Tab value="4" label="Purchase Orders" />
                <Tab value="5" label="Setup" />
                <Tab value="6" label="Suppliers" />
                <Tab value="7" label="Reports" />
                <Tab value="8" label="Summary" />
                </Tabs>
            </Box>
            </TabContext>
            </Box>
        </Card>
        <Card style={{minWidth: 1000}}>
            <Scrollbar>
                <Box >
                <TabContext value={value}>
                <TabPanel value="1">
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                        <SupplyChain_Dashboard title="Supplied Approved"/>
                        <SupplyChain_Dashboard title="Pending"/>
                        <SupplyChain_Dashboard title="Rejected"/>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                        <SupplyChain_Dashboard_UpdatesCard />
                        <SupplyChain_Dashboard_Chip />
                    </div>
                </TabPanel>
                <TabPanel value="2">
                    <>
                    <Products />
                    </>
                </TabPanel>
                <TabPanel value="3">
                    <>
                    <Products_Discount />
                    </>
                </TabPanel>
                </TabContext>
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
    </Container>
    </Box>
  )
}

export default SupplyChain
