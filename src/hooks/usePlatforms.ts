import useData from "./useData";
import platforms from "../data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
// ** This calls the server for dynamic platforms
// const usePlatform = () => useData<Platform>("/platforms/lists/parents");

//** This statically renders platforms
const usePlatform = () => ({ data: platforms, isLoading: false, error: null });
export default usePlatform;
