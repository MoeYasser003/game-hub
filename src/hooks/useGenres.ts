import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// **This calls the server for dynamic genres list
// const useGenres = () => useData<Genre>("/genres");

// ** This Statically renders the genre list
const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
