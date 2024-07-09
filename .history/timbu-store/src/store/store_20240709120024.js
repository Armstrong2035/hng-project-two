import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  (set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
  }),
  {
    name: "cart-storage",
  }
);

export default useStore;
