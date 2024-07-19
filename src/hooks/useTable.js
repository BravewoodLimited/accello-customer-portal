import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

/**
 *
 * @param {import("@tanstack/react-table").TableOptions<any>} options
 * @returns
 */
function useTable(options) {
  return useReactTable({
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    columns,
    ...options,
    data: options.data || data,
    defaultColumn: {
      // cell: (info) => createElement('p', {}, info.getValue()),
      ...options?.defaultColumn,
    },
  });
}

export default useTable;

const data = [];

const columns = [{}];
