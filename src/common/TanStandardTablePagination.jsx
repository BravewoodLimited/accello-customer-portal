import { Icon, IconButton } from "@mui/material";
import clsx from "clsx";
import { Close, FirstPage, LastPage, NavigateBefore, NavigateNext } from "@mui/icons-material"

import "./TanStandardTablePagination.css";

/**
 *
 * @param {TanStandardTablePaginationProps} props
 */
function TanStandardTablePagination(props) {
  const { instance, className, classes, ...restProps } = props;

  return (
    <div
      className={clsx("TanStandardTablePagination", className, classes?.root)}
      {...restProps}
    >
      <span className={clsx("TanStandardTablePagination__info", classes?.info)}>
        {instance.getState().pagination?.pageSize *
          instance.getState().pagination?.pageIndex +
          1}{" "}
        -{" "}
        {instance.getState().pagination?.pageSize *
          (instance.getState().pagination?.pageIndex + 1)}{" "}
        of{" "}
        {instance.options.manualPagination && instance.options?.pageCount > 0
          ? instance.options?.pageCount *
              instance.getState().pagination.pageSize -
            (instance.getState().pagination.pageSize -
              instance.getPrePaginationRowModel().rows.length)
          : instance.getPrePaginationRowModel().rows.length}
      </span>
      <FirstPage
        color="inherit"
        size="small"
        onClick={() => instance.setPageIndex(0)}
        disabled={!instance.getCanPreviousPage()}
      >
        
      </FirstPage>
      <NavigateBefore
        color="inherit"
        size="small"
        onClick={() => instance.previousPage()}
        disabled={!instance.getCanPreviousPage()}
      >
      </NavigateBefore>
      <div className={clsx("TanStandardTablePagination__page", classes?.page)}>
        <h5
          className={clsx(
            "TanStandardTablePagination__pageText",
            classes?.pageText
          )}
        >
          {instance.getState()?.pagination?.pageIndex + 1}
        </h5>
      </div>
      <NavigateNext
        color="inherit"
        size="small"
        onClick={() => instance.nextPage()}
        disabled={!instance.getCanNextPage()}
      >
        {/* <Icon>navigate_next</Icon> */}
      </NavigateNext>
      <LastPage
        color="inherit"
        size="small"
        onClick={() => instance.setPageIndex(instance.getPageCount() - 1)}
        disabled={!instance.getCanNextPage()}
      >
        {/* <Icon>last_page</Icon> */}
      </LastPage>
    </div>
  );
}

export default TanStandardTablePagination;

/**
 * @typedef {{
 * instance: import('@tanstack/react-table').Table<any>
 * classes?: {root: string; info: string; page: string; pageText: string}
 * } & import("react").ComponentPropsWithRef<'div'>} TanStandardTablePaginationProps
 */
