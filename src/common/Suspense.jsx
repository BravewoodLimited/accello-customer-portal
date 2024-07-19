import { Suspense as ReactSuspense } from "react";
import Loading from "./LoadingIndicator";

/**
 *
 * @param {import('react').SuspenseProps} props
 */
function Suspense(props) {
  return (
    <ReactSuspense
      {...{
        fallback: (
          <div className="flex justify-center items-center p-8">
            <Loading />
          </div>
        ),
        ...props,
      }}
    />
  );
}

export default Suspense;
