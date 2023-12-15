import React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from '../../../../hooks/use-selection';
import { ProductsTable } from '../../Products/ProductsTables';
import { AddProductDialogBox } from '../../../statelessViews';
import { addNewInventory, getInventory } from '../../../../actions/supplyChainActions';
import { InventoryTable } from './InventoryTables';
import { AddInventory } from './AddInventory';
import { listProducts } from '../../../../actions/productActions';

const Inventory = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [showAddProductDialog, setShowAddProductDialog] = useState(false);
    const [showAddProductsForm, setShowAddProductsForm] = useState(false);

  const handleAddAndSave = () => {
    setShowAddProductsForm(!showAddProductsForm)
  }

  const handleSaveInventory = () => {
    const newInventoryData = {
      "name": localStorage.getItem("name"),
      "batchNumber": localStorage.getItem("batchNumber"),
      "oem": localStorage.getItem("oem"),
      "hsnCode": localStorage.getItem("hsnCode"),
      "totalQuantity": localStorage.getItem("totalQuantity")
    }

    dispatch(addNewInventory(newInventoryData));
  }

  const inventoryList = useSelector(state => state.inventoryList)
  const {inventory} = inventoryList

  const productList = useSelector(state => state.productList)
  const { products } = productList
  
  debugger;
  useEffect(() => {
    dispatch(getInventory())
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 12
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1} direction="row">
                <Typography variant="h4">
                  Inventory
                </Typography>

                {/* TO DO : Alignment needs to be fixed after adding the Search Bar */}
                {/*  <CustomersSearch /> */}
                
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
              <div>
                {showAddProductsForm && <Button
                    variant="outlined"
                    onClick={() => setShowAddProductsForm(!showAddProductsForm)}
                    style={{marginRight: "10px"}}
                  >
                    Cancel
                  </Button>}
                  
                {!showAddProductsForm && <Button
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <PlusIcon />
                      </SvgIcon>
                    )}
                    variant="contained"
                    onClick={handleAddAndSave}
                  >
                    Stock In
                  </Button>}
                  {showAddProductsForm && <Button
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <PlusIcon />
                      </SvgIcon>
                    )}
                    variant="contained"
                    onClick={handleSaveInventory}
                  >
                    Save Inventory
                  </Button>}
              </div>
              </div>
            </Stack>
            
            {/* {showAddProductDialog && <AddProductDialogBox open={showAddProductDialog} close={() => setShowAddProductDialog(false)}/>} */}

            {showAddProductsForm ? 
                <AddInventory products={products} onAdd={handleSaveInventory}/> 
                : 
                <InventoryTable
                    count={inventory?.length}
                    items={inventory}
                    //onDeselectAll={customersSelection.handleDeselectAll}
                    //onDeselectOne={customersSelection.handleDeselectOne}
                    //onPageChange={handlePageChange}
                    //onRowsPerPageChange={handleRowsPerPageChange}
                    //onSelectAll={customersSelection.handleSelectAll}
                    //onSelectOne={customersSelection.handleSelectOne}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    //selected={customersSelection.selected}
              />}
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Inventory
