import { countdown } from "utils/date";
import { useMemo, useSyncExternalStore } from "react";
import useLazyRef from "./useLazyRef";

/**
 * @param {any} date
 * @param {{interval: number}} options
 */
function useCountdown(date, options = {}) {
  const { interval = 1000 } = options;

  const snapShotRef = useLazyRef(getCountdown, date);

  const { subscribe, getSnapshot } = useMemo(
    () => ({
      getSnapshot() {
        return snapShotRef.current;
      },
      subscribe(listener) {
        const intervalId = setInterval(() => {
          snapShotRef.current = getCountdown(date);
          listener();
        }, interval);
        return () => {
          if (intervalId) {
            clearInterval(intervalId);
          }
        };
      },
    }),
    [date, interval, snapShotRef]
  );

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export default useCountdown;

function getCountdown(date) {
  return countdown(new Date(), date ? new Date(date) : new Date());
}

// function getServerSnapshot() {
//   return countdown(new Date());
// }
