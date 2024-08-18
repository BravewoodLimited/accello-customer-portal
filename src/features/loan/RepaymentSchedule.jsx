import React, { useMemo } from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { formatNumberToCurrency, parseDateToString } from 'utils/number';

const RepaymentScheduleTable = ({ data }) => {
  const original = false;
  const totalPrincipalDisbursed = original
    ? data?.originalSchedule?.totalPrincipalDisbursed
    : data?.totalPrincipalDisbursed || 0;
  const totalInterestCharged = original
    ? data?.originalSchedule?.totalInterestCharged
    : data?.totalInterestCharged || 0;
  const totalFeeChargesCharged = original
    ? data?.originalSchedule?.totalFeeChargesCharged
    : data?.totalFeeChargesCharged || 0;
  const totalRepaymentExpected = original
    ? data?.originalSchedule?.totalRepaymentExpected
    : data?.totalRepaymentExpected || 0;
  const totalOutstanding = original
    ? data?.originalSchedule?.totalOutstanding
    : data?.totalOutstanding || 0;
  const totalPenaltyChargesCharged = original
    ? data?.originalSchedule?.totalPenaltyChargesCharged
    : data?.totalPenaltyChargesCharged || 0;
  const totalPaidInAdvance = original
    ? data?.originalSchedule?.totalPaidInAdvance
    : data?.totalPaidInAdvance || 0;
  const totalPaidLate = original
    ? data?.originalSchedule?.totalPaidLate
    : data?.totalPaidLate || 0;
  const totalPaid = original
    ? data?.originalSchedule?.totalRepayment
    : data?.totalRepayment || 0;

  const dataTableTotal = useMemo(
    () => ({
      totalPrincipalDisbursed,
      totalInterestCharged,
      totalFeeChargesCharged,
      totalRepaymentExpected,
      totalOutstanding,
      totalPenaltyChargesCharged,
      totalPaidInAdvance,
      totalPaidLate,
      totalPaid,
    }),
    [
      totalPrincipalDisbursed,
      totalInterestCharged,
      totalFeeChargesCharged,
      totalRepaymentExpected,
      totalOutstanding,
      totalPenaltyChargesCharged,
    ]
  );

  const columns = useMemo(
    () => [
      {
        id: 'period',
        Header: '#',
        cell: ({row}) => row?.original?.period,
        width: 50,
        Footer: 'Total',
      },
      {
        id: 'daysInPeriod',
        Header: 'Days',
        cell: ({row}) => row?.original?.daysInPeriod,
        width: 50,
      },
      {
        id: 'fromDate',
        Header: 'Date',
        cell: ({row}) => parseDateToString(row?.original?.fromDate),
        width: 150,
      },
      {
        id: 'dueDate',
        Header: 'Due Date',
        cell: ({row}) => parseDateToString(row?.original?.dueDate),
      },
      {
        id: 'obligationsMetOnDate',
        Header: 'Paid Date',
        cell: ({row}) => parseDateToString(row?.original?.obligationsMetOnDate),
      },
      {
        id: 'principalDue',
        Header: 'Principal Due',
        cell: ({row}) => `${formatNumberToCurrency(row?.original?.principalDue)}`,
        width: 150,
        Footer: `₦${formatNumberToCurrency(dataTableTotal?.totalPrincipalDisbursed)}`,
      },
      {
        id: 'principalLoanBalanceOutstanding',
        Header: 'Balance Of Loan',
        cell: ({row}) => `${formatNumberToCurrency(row?.original?.principalLoanBalanceOutstanding)}`,
        width: 150,
      },
      {
        id: 'interestDue',
        Header: 'Interest',
        cell: ({row}) => `${formatNumberToCurrency(row?.original?.interestDue)}`,
        width: 150,
        Footer: `₦${formatNumberToCurrency(dataTableTotal?.totalInterestCharged)}`,
      },
      {
        id: 'feeChargesDue',
        Header: 'Fees',
        cell: ({row}) => `${formatNumberToCurrency(row?.original?.feeChargesDue)}`,
        width: 150,
        Footer: `₦${formatNumberToCurrency(dataTableTotal?.totalFeeChargesCharged || 0)}`,
      },
      {
        id: 'penaltyChargesDue',
        Header: 'Penalties',
        cell: ({row}) => `${formatNumberToCurrency(row?.original?.penaltyChargesDue)}`,
        width: 150,
        Footer: `₦${formatNumberToCurrency(dataTableTotal?.totalPenaltyChargesCharged)}`,
      },
      {
        id: 'totalDueForPeriod',
        Header: 'Due',
        cell: ({row}) => `${formatNumberToCurrency(row?.original?.totalDueForPeriod)}`,
        width: 150,
        Footer: `₦${formatNumberToCurrency(dataTableTotal?.totalRepaymentExpected)}`,
      },
      {
        id: 'totalPaidForPeriod',
        Header: 'Paid',
        cell: ({row}) => `${formatNumberToCurrency(row?.original?.totalPaidForPeriod)}`,
        width: 150,
        Footer: `₦${formatNumberToCurrency(dataTableTotal?.totalPaid)}`,
      },
      {
        id: 'totalPaidInAdvanceForPeriod',
        Header: 'In Advance',
        cell: ({row}) => `${formatNumberToCurrency(row?.original?.totalPaidInAdvanceForPeriod)}`,
        width: 150,
        Footer: `₦${formatNumberToCurrency(dataTableTotal?.totalPaidInAdvance)}`,
      },
      {
        id: 'totalPaidLateForPeriod',
        Header: 'Late',
        cell: ({row}) => `${formatNumberToCurrency(row?.original?.totalPaidLateForPeriod)}`,
        width: 150,
        Footer: `₦${formatNumberToCurrency(dataTableTotal?.totalPaidLate)}`,
      },
      {
        id: 'totalOutstandingForPeriod',
        Header: 'Outstanding',
        cell: ({row}) => `${formatNumberToCurrency(row?.original?.totalOutstandingForPeriod)}`,
        width: 150,
        Footer: `₦${formatNumberToCurrency(dataTableTotal?.totalOutstanding)}`,
      },
    ],
    [dataTableTotal]
  );

  const table = useReactTable({
    data: data?.periods,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer component={Paper} className="mb-10">
      <Table aria-label="repayment schedule table">
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className='bg-primary-main !text-white' key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell className='text-white font-bold' key={header.id}>
                  {header.isPlaceholder ? null : header.column.columnDef.Header}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
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

export default RepaymentScheduleTable;
