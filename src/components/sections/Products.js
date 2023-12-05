import React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from '../../hooks/use-selection';
import { ProductsTable } from './ProductsTables';
import { AddProductDialogBox } from '../statelessViews';
import { AddProducts } from './AddProducts';
import { listProducts } from '../../actions/productActions';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';

const Products = () => {
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
                  Products
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
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  onClick={handleAddAndSave}
                >
                  {showAddProductsForm ? "Save" : "Add"}
                </Button>
              </div>
            </Stack>
            
            {/* {showAddProductDialog && <AddProductDialogBox open={showAddProductDialog} close={() => setShowAddProductDialog(false)}/>} */}

            {showAddProductsForm ? 
                <AddProducts products={products}/> 
                : 
                <ProductsTable
                    count={products?.length}
                    items={products}
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

export default Products