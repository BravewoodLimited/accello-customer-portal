import { Skeleton } from "@mui/material";

/**
 *
 * @param {LoadingTableSkeletonProps} props
 * @returns
 */
function LoadingTableSkeleton(props) {
  const { rowCount = 6, colCount = 6 } = props;
  return (
    <div>
      <div className="flex items-center mb-4">
        {Array(colCount)
          .fill(1)
          .map((_, index) => (
            <Skeleton key={index} height={20} className="flex-1" />
          ))}
      </div>
      <div>
        {Array(rowCount)
          .fill(1)
          .map((_, index) => (
            <Skeleton key={index} height={20} />
          ))}
      </div>
    </div>
  );
}

export default LoadingTableSkeleton;

/**
 * @typedef {{} & import("@mui/material").SkeletonProps} LoadingTableSkeletonProps
 */
