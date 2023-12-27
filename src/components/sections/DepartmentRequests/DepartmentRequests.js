import React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from '../../../hooks/use-selection';
import { DepartmentRequestsTable } from './DepartmentRequestsTables';
import { AddProductDialogBox } from '../../statelessViews';
import { AddDepartmentRequests } from './AddDepartmentRequests';
import { addNewProduct, listProducts } from '../../../actions/productActions';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import { getInventory } from '../../../actions/supplyChainActions';
import { addNewDepartmentRequest, getAllInternalDepartmentRequestRecords } from '../../../actions/departmentRequests';

const DepartmentRequests = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [showAddProductsForm, setShowAddProductsForm] = useState(false);

  const handleAddAndSave = () => {
    setShowAddProductsForm(!showAddProductsForm)
  }

  const handleSaveProduct = () => {
    const newRequestData = {
      "requestedProductName": localStorage.getItem("requestedProductName"),
      "requestedProductQuantity": localStorage.getItem("requestedProductQuantity"),
      "batchNumber": localStorage.getItem("batchNumber"),
      "requestingDepartmentName": localStorage.getItem("requestingDepartmentName"),
      "dateRequested": localStorage.getItem("dateRequested"),
      "dateFulfilled": localStorage.getItem("dateFulfilled"),
      "fulfillmentStatus": localStorage.getItem("fulfillmentStatus")
    }

    dispatch(addNewDepartmentRequest(newRequestData));
  }

  const productList = useSelector(state => state.productList)
  const { products } = productList

  const inventoryList = useSelector(state => state.inventoryList)
  const { inventory } = inventoryList

  const deptRecordsList = useSelector(state => state.departmentRequestList)
  const { recordsList } = deptRecordsList

  useEffect(() => {
    dispatch(listProducts())
    dispatch(getInventory())
    dispatch(getAllInternalDepartmentRequestRecords())
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
        <Container maxWidth={'lg'}>
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1} direction="row">
                <Typography variant="h4">
                  Internal Department Request Records
                </Typography>
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
                    Add Record
                  </Button>}
                  {showAddProductsForm && <Button
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <PlusIcon />
                      </SvgIcon>
                    )}
                    variant="contained"
                    onClick={handleSaveProduct}
                  >
                    Save Product
                  </Button>}
              </div>
            </Stack>

            {showAddProductsForm ? 
                <AddDepartmentRequests inventory={inventory} products={products} onAdd={handleSaveProduct} /> 
                : 
                <DepartmentRequestsTable
                    count={recordsList?.length}
                    items={recordsList}
                    page={page}
                    rowsPerPage={rowsPerPage}
              />}
          </Stack>
        </Container>
      </Box>
      </>
  )
}

export default DepartmentRequests
