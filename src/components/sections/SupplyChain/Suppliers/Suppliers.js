import React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from '../../../../hooks/use-selection';
import { SuppliersTable } from './SuppliersTable';
import { AddSuppliers } from './AddSuppliers';
import { addNewSupplier, getAllSuppliers, getAllSupplierTypes } from '../../../../actions/supplyChainActions';

const Suppliers = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [showAddProductDialog, setShowAddProductDialog] = useState(false);
    const [showAddProductsForm, setShowAddProductsForm] = useState(false);

  const handleAddAndSave = () => {
    setShowAddProductsForm(!showAddProductsForm)
  }

  const handleSaveSupplier = () => {
    const newSupplierData = {
      "name": localStorage.getItem("name"),
      "companyName" : localStorage.getItem("companyName"),
      "supplierType": localStorage.getItem("supplierType"),
      "email": localStorage.getItem("email"),
      "city": localStorage.getItem("state"),
      "contactNumber": localStorage.getItem("contactNumber"),
      "gstNumber": localStorage.getItem("gstNumber"),
      "productType": localStorage.getItem("productType"),
      "state": localStorage.getItem("state")
    }

    dispatch(addNewSupplier(newSupplierData));
    
  }

  const allSuppliersList = useSelector(state => state.allSuppliersList)
  const {allSuppliers} = allSuppliersList

  const supplierTypes = useSelector(state => state.allSupplierTypes)
    const {allSupplierTypes} = supplierTypes
  
  useEffect(() => {
    dispatch(getAllSuppliers())
    dispatch(getAllSupplierTypes())
  }, [dispatch])


  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 11
        }}
      >
        <Container style={{width: "fit-content"}}>
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1} direction="row">
                <Typography variant="h4">
                  Suppliers
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
              {!showAddProductsForm && <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  onClick={handleAddAndSave}
                >
                  Add Supplier
                </Button>}
                {showAddProductsForm && <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  onClick={handleSaveSupplier}
                >
                  Save
                </Button>}
              </div>
            </Stack>
            {showAddProductsForm ? 
                <AddSuppliers products={allSuppliers} onAdd={handleSaveSupplier} supplierTypes={allSupplierTypes}/> 
                : 
                <SuppliersTable
                    count={allSuppliers?.length}
                    items={allSuppliers}
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

export default Suppliers
