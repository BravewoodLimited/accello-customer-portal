import { slice } from "configs/store-slice";
import { useStoreSelector } from "hooks/useStoreSelector";
import { useStoreDispatch } from "./useStoreDispatch";

function useSideNavigation() {
  const dispatch = useStoreDispatch();
  const isOpen = useStoreSelector((state) => state.global.isSideNavigation);

  function toggle(payload) {
    dispatch(
      slice.actions.toggleSideNavigation(
        typeof payload === "boolean" ? payload : undefined
      )
    );
  }

  function set(payload) {
    dispatch(slice.actions.toggleSideNavigation(payload));
  }

  return { isOpen, toggle, set };
}

export default useSideNavigation;
