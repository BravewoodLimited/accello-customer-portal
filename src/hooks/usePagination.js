import { PAGE_INDEX, PAGE_SIZE } from "constants/pagination";
import { useCallback, useState } from "react";

/**
 *
 * @param {{pageIndex: number, pageSize: number}} initialPaginationState
 * @returns
 */
function usePagination(initialPaginationState) {
  const [state, setState] = useState(() => ({
    pageSize: initialPaginationState?.pageSize ?? PAGE_SIZE,
    pageIndex: initialPaginationState?.pageIndex ?? PAGE_INDEX,
  }));

  const paramsState = {
    offset: state.pageSize * state.pageIndex,
    limit: state.pageSize,
  };

  const setParamState = useCallback(({ offset, limit }) => {
    setState({ pageIndex: offset / limit, pageSize: limit });
  }, []);

  return /** @type {[typeof state, typeof setState, typeof paramsState, typeof setParamState]} */ ([
    state,
    setState,
    paramsState,
    setParamState,
  ]);
}

export default usePagination;
