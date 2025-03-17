import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  orderId?: number;
  searchString?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setOrderId: (orderId: number) => void;
  setSearchString: (searchString: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),

  setPlatformId: (platformId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),

  setOrderId: (orderId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, orderId } })),

  setSearchString: (searchString: string) =>
    set(() => ({ gameQuery: { searchString } })),
}));

export default useGameQueryStore;
