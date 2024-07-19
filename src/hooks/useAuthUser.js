import { useStoreSelector } from "./useStoreSelector";

function useAuthUser() {
  return useStoreSelector((state) => state.global.authUser);
}

export default useAuthUser;
