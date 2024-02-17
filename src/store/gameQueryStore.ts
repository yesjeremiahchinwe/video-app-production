import { create } from "zustand";


interface GameQuery {
    genreId?: number
    platformId?: number
    sortOrder?: string
    searchText?: string
}

interface GameQueryStore {
    gameQuery: GameQuery,
    setGenreId: (id: number) => void
    setPlatformId: (id: number) => void
    setSortOder: (sortBy: string) => void
    setSearchText: (search: string) => void
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setGenreId: (genreId) => set((store) => ({ gameQuery: { ...store.gameQuery, genreId }})),
    setPlatformId: (platformId) => set((store) => ({ gameQuery: { ...store.gameQuery, platformId }})),
    setSortOder: (sortOrder) => set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } }))
}))

export default useGameQueryStore
