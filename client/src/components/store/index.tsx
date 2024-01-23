import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: {
    id: null,
    name: '',
    books: [],
  },
  setUser: (user) => set({ user }),
  addBook: (book) =>
    set((state) => ({
      user: { ...state.user, books: [...state.user.books, book] },
    })),
  removeBook: (bookId) =>
    set((state) => ({
      user: {
        ...state.user,
        books: state.user.books.filter((book) => book.id !== bookId),
      },
    })),
}));

export default useUserStore;
