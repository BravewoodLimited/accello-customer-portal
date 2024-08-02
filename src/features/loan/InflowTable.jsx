import React from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const InflowTable = () => {
  const data = React.useMemo(
    () => [
      { employer: '--', loanType: 'State Workers Quick Loan(3-6 months)', amount: '₦1.00', period: '2023-9-19', status: 'SUCCESS' },
      { employer: '--', loanType: 'State Workers Quick Loan(3-6 months)', amount: '₦20,115.67', period: '2024-7-14', status: 'SUCCESS' },
      { employer: '--', loanType: 'State Workers Quick Loan(3-6 months)', amount: '₦20,116.67', period: '2024-7-14', status: 'SUCCESS' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { accessorKey: 'index', header: '#', cell: info => info.row.index + 1 },
      { accessorKey: 'employer', header: 'Employer' },
      { accessorKey: 'loanType', header: 'Loan Type' },
      { accessorKey: 'amount', header: 'Amount' },
      { accessorKey: 'period', header: 'Period' },
      { accessorKey: 'status', header: 'Status' },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="inflow table">
        <TableHead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableCell key={header.id}>
                  {header.isPlaceholder ? null : header.column.columnDef.header}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                  {cell.column.columnDef.cell(cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InflowTable;
