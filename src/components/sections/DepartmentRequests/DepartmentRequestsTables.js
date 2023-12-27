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

export const DepartmentRequestsTable = (props) => {
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
                  Requested Product Name
                </TableCell>
                <TableCell>
                  Requested Product Quantity
                </TableCell>
                <TableCell>
                  Batch No
                </TableCell>
                <TableCell>
                  Requesting Department Name
                </TableCell>
                <TableCell>
                  Date Requested
                </TableCell>
                <TableCell>
                  Date Fulfilled
                </TableCell>
                <TableCell>
                  Fulfillment Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((record) => {
                const isSelected = selected.includes(record._id);
               // const createdAt = format(customer.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={record._id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(record._id);
                          } else {
                            onDeselectOne?.(record._id);
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
                          {record.requestedProductName}
                        </Typography>
                        
                      </Stack>
                    </TableCell>
                    <TableCell>
                      {record.requestedProductQuantity}
                    </TableCell>
                    <TableCell>
                      {record.batchNumber}
                    </TableCell>
                    <TableCell>
                      {record.requestingDepartmentName}
                    </TableCell>
                    <TableCell>
                      {record.dateRequested}
                    </TableCell>
                    <TableCell>
                      {record.dateFulfilled}
                    </TableCell>
                    <TableCell>
                      {record.fulfillmentStatus}
                    </TableCell>
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

DepartmentRequestsTable.propTypes = {
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
