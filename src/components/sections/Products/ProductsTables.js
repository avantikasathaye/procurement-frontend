import PropTypes from 'prop-types';
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
  Typography
} from '@mui/material';
import { Scrollbar } from '../../statelessViews';

export const ProductsTable = (props) => {
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
    selected = []
  } = props;

  const selectedSome = (selected.length > 0) && (selected.length < items.length);
  const selectedAll = (items.length > 0) && (selected.length === items.length);

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedAll}
                    indeterminate={selectedSome}
                    onChange={(event) => {
                      if (event.target.checked) {
                        onSelectAll?.();
                      } else {
                        onDeselectAll?.();
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  Brand
                </TableCell>
                <TableCell>
                  Category
                </TableCell>
                <TableCell>
                  Batch No
                </TableCell>
                <TableCell>
                  Product Name
                </TableCell>
                <TableCell>
                  Manufacturer
                </TableCell>
                <TableCell>
                  OEM
                </TableCell>
                <TableCell>
                  HSN Code
                </TableCell>
                <TableCell>
                  Unit Rate
                </TableCell>
                <TableCell>
                  GST (%)
                </TableCell>
                <TableCell>
                  Total Rate (Inc. GST)
                </TableCell>
               {/*  <TableCell>
                Unit Rate (Inc. GST)
                </TableCell>
                <TableCell>
                Unit Rate (Exc. GST)
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer) => {
                const isSelected = selected.includes(customer._id);
               // const createdAt = format(customer.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={customer._id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(customer._id);
                          } else {
                            onDeselectOne?.(customer._id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={2}
                      >
                        <Typography variant="subtitle2">
                          {customer.brand}
                        </Typography>
                        
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {customer.category}
                    </TableCell>
                    <TableCell>
                      {customer.modelNumber}
                    </TableCell>
                    <TableCell>
                      {customer.name}
                    </TableCell>
                    <TableCell>
                      {customer.manufacturer}
                    </TableCell>
                    <TableCell>
                      {customer.oem}
                    </TableCell>
                    <TableCell>
                      {customer.hsnCode}
                    </TableCell>
                    <TableCell>
                      {customer.salesRate}
                    </TableCell>
                    <TableCell>
                      {customer.gst}
                    </TableCell>
                    <TableCell>
                      {customer.totalRate}
                    </TableCell>
                   {/*  <TableCell>
                      {customer.unitRateExcGST}
                    </TableCell>
                    <TableCell>
                      {customer.unitRateIncGST}
                    </TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ProductsTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};
