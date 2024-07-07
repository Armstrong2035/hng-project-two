import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist((set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  }))
);

export default useStore;
