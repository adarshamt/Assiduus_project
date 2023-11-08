
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { color } from 'd3';

function createData(name, calories, fat, ) {
  return { name, calories, fat,  };
}

const rows = [
  createData('Sales', 1194.58, 11418.29),
  createData('Advertising', 6879.02, 9271.36),
  createData('Inventory', 4692.26, 9768.09),
  createData('Entertainment', 0.00, 0.00),
  createData('Product', 4652.10,2529.90),

];

export default function AccountTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450,height:'250px' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color:'#e5e6e7',fontWeight:'600',fontFamily:'sans-serif'}}>Account</TableCell>
            <TableCell align="center" sx={{color:'#e5e6e7',fontWeight:'600',fontFamily:'sans-serif'}}>This Month</TableCell>
            <TableCell align="center" sx={{color:'#e5e6e7',fontWeight:'600',fontFamily:'sans-serif'}}>YTD</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{fontWeight:'600',fontFamily:'sans-serif'}} component="th" scope="row" >
                {row.name}
              </TableCell>
              <TableCell sx={{fontWeight:'600',fontFamily:'sans-serif'}} align="center">{row.calories}</TableCell>
              <TableCell sx={{fontWeight:'600',fontFamily:'sans-serif'}} align="center">{row.fat}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}