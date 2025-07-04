"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  id: number
  name: string
  price: number
  originalPrice: number
  image: string
  quantity: number
  minOrder: number
  maxOrder: number
  inStock: boolean
}

interface CartStore {
  items: CartItem[]
  addItem: (product: Omit<CartItem, "quantity">) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const items = get().items
        const existingItem = items.find((item) => item.id === product.id)

        if (existingItem) {
          const newQuantity = Math.min(existingItem.quantity + product.minOrder, product.maxOrder)
          set({
            items: items.map((item) => (item.id === product.id ? { ...item, quantity: newQuantity } : item)),
          })
        } else {
          set({
            items: [...items, { ...product, quantity: product.minOrder }],
          })
        }
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        })
      },

      updateQuantity: (id, quantity) => {
        const items = get().items
        const item = items.find((item) => item.id === id)

        if (item) {
          const newQuantity = Math.max(item.minOrder, Math.min(item.maxOrder, quantity))

          set({
            items: items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)),
          })
        }
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
      },
    }),
    {
      name: "cart-storage",
    },
  ),
)
