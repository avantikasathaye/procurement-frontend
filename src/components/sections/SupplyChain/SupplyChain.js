import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container } from '@mui/material';
import { SupplyChain_Dashboard_Chip, SupplyChain_Dashboard_UpdatesCard, 
          SupplyChain_SuperAdmin_Dashboard_UpdatesCard } from '../../statelessViews';
import { listProducts } from '../../../actions/productActions';
import { SupplyChain_Dashboard } from '../../statelessViews';
import { getInventory } from '../../../actions/supplyChainActions';

const SupplyChain = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [showAddProductDialog, setShowAddProductDialog] = useState(false);
    const [showAddProductsForm, setShowAddProductsForm] = useState(false);

  const handleAddAndSave = () => {
    setShowAddProductsForm(!showAddProductsForm)
  }

  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const productList = useSelector(state => state.productList)
  const { products } = productList

  const inventoryList = useSelector(state => state.inventoryList)
  const {inventory} = inventoryList

  const login = useSelector(state => state.login)
  const { userInfo } = login

  debugger;

  useEffect(() => {
    dispatch(listProducts())
    dispatch(getInventory())
  },[dispatch])


  return (
    <Box
    component="main"
    sx={{
      flexGrow: 1,
      py: 12
    }}>
        <Container maxWidth="lg">
            <>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                  <SupplyChain_Dashboard title="Inventory" totalInventory={inventory?.length}/>
                  <SupplyChain_Dashboard title="Pending Purchase Orders"/>
                  <SupplyChain_Dashboard title="Pending Department Requests"/>
                  <SupplyChain_Dashboard title="Expected Delivery Products"/>
              </div>
              {/* <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                  <SupplyChain_Dashboard_UpdatesCard totalProducts={products.length} totalInventory={inventory?.length}/>
                  <SupplyChain_Dashboard_Chip />
              </div> */}

              <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
                  {userInfo.isSuperAdmin ? 
                    (
                      <>
                        <SupplyChain_SuperAdmin_Dashboard_UpdatesCard totalProducts={products.length} totalInventory={inventory?.length}/>
                        <SupplyChain_Dashboard_Chip />
                      </>
                    ) : (
                      <>
                        <SupplyChain_Dashboard_UpdatesCard totalProducts={products.length} totalInventory={inventory?.length}/>
                        <SupplyChain_Dashboard_Chip />
                      </>
                    )
                  }
                  
              </div>

             
            </>
    </Container>
    </Box>
  )
}

export default SupplyChain
