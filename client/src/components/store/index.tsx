import { create } from 'zustand';

const useLoginStore = create((set) => ({
  isLogin: true,
  setIsLogin: (newValue) => set({ isLogin: newValue }),
}));

export default useLoginStore;
