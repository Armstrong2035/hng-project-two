import { create } from "zustand";

const useStore = create((set) => ({
  cart: [],
  addToCart: () => set((state) => ({ cart: [...cart, state] })),
}));
