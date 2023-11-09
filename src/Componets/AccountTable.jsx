import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  styled  from '@emotion/styled';

const StyledTable = styled(Table)({
  border: 'none', // Remove border from the entire table
  
});

const StyledTableCell = styled(TableCell)({
  borderBottom: 'none', // Remove border from individual cells
  // Add other cell-specific styles as needed
});

const StyledTableContainer = styled(TableContainer)({
  // Add styles for the table container if needed
  boxShadow:'none'
});

const useStyles = {
  // Your other styles here
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData('Sales', 1194.58, 11418.29),
  createData('Advertising', 6879.02, 9271.36),
  createData('Inventory', 4692.26, 9768.09),
  createData('Entertainment', 0.00, 0.00),
  createData('Product', 4652.10, 2529.90),
];

export default function AccountTable() {
  // const classes = useStyles(); // You can uncomment this if you have other styles

  return (
    <StyledTableContainer component={Paper}>
      <StyledTable sx={{ minWidth: 450, height: '250px' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ color: '#e5e6e7', fontWeight: '600',fontSize:'12px',letterSpacing:'.5px', fontFamily: 'sans-serif' }}>Account</StyledTableCell>
            <StyledTableCell align="center" sx={{ color: '#e5e6e7', fontWeight: '600',fontSize:'12px',letterSpacing:'.5px', fontFamily: 'sans-serif' }}>This Month</StyledTableCell>
            <StyledTableCell align="center" sx={{ color: '#e5e6e7', fontWeight: '600',fontSize:'12px',letterSpacing:'.5px', fontFamily: 'sans-serif' }}>YTD</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <StyledTableCell sx={{ fontWeight: '600', fontFamily: 'sans-serif' }} component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell sx={{ fontWeight: '600', fontFamily: 'sans-serif' }} align="center">{row.calories}</StyledTableCell>
              <StyledTableCell sx={{ fontWeight: '600', fontFamily: 'sans-serif' }} align="center">{row.fat}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}
