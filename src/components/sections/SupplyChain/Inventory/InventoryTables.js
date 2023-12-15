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
import { Scrollbar } from '../../../statelessViews';

export const InventoryTable = (props) => {
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
                  Name
                </TableCell>
                <TableCell>
                  Model No
                </TableCell>
                <TableCell>
                  OEM
                </TableCell>
                <TableCell>
                  Specification
                </TableCell>
                <TableCell>
                  Total Quantity
                </TableCell>
                <TableCell>
                  Total Consumed Quantity
                </TableCell>
                <TableCell>
                 Total Available Quantity
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item) => {
                const isSelected = selected.includes(item._id);
               // const createdAt = format(item.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={item._id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isSelected}
                        onChange={(event) => {
                          if (event.target.checked) {
                            onSelectOne?.(item._id);
                          } else {
                            onDeselectOne?.(item._id);
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      {item.name}
                    </TableCell>
                    <TableCell>
                      {item.batchNumber}
                    </TableCell>
                    <TableCell>
                      {item.oem}
                    </TableCell>
                    <TableCell>
                      {item.specification}
                    </TableCell>
                    <TableCell>
                      {item.totalQuantity}
                    </TableCell>
                    <TableCell>
                      {item.totalConsumedQuantity}
                    </TableCell>
                    <TableCell>
                      {item.totalQuantity - item.totalConsumedQuantity}
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

InventoryTable.propTypes = {
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
