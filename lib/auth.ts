"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export type UserRole = "super_admin" | "admin" | "manager" | "viewer"

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  permissions: string[]
  avatar?: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  hasPermission: (permission: string) => boolean
  hasRole: (role: UserRole) => boolean
}

// Mock users database
const mockUsers: Record<string, { password: string; user: User }> = {
  "admin@nayakenterprises.com": {
    password: "admin123",
    user: {
      id: "1",
      email: "admin@nayakenterprises.com",
      name: "Super Admin",
      role: "super_admin",
      permissions: ["*"], // All permissions
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  "manager@nayakenterprises.com": {
    password: "manager123",
    user: {
      id: "2",
      email: "manager@nayakenterprises.com",
      name: "Store Manager",
      role: "manager",
      permissions: ["products.read", "products.write", "orders.read", "orders.write", "customers.read"],
    },
  },
  "viewer@nayakenterprises.com": {
    password: "viewer123",
    user: {
      id: "3",
      email: "viewer@nayakenterprises.com",
      name: "Data Viewer",
      role: "viewer",
      permissions: ["products.read", "orders.read", "customers.read", "analytics.read"],
    },
  },
}

// Role-based permissions
const rolePermissions: Record<UserRole, string[]> = {
  super_admin: ["*"],
  admin: ["products.*", "orders.*", "customers.*", "analytics.*", "reports.*", "settings.*", "users.*"],
  manager: ["products.read", "products.write", "orders.read", "orders.write", "customers.read", "analytics.read"],
  viewer: ["products.read", "orders.read", "customers.read", "analytics.read"],
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      login: async (email: string, password: string) => {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const userRecord = mockUsers[email]
        if (!userRecord || userRecord.password !== password) {
          return { success: false, error: "Invalid email or password" }
        }

        const user = userRecord.user
        set({ user, isAuthenticated: true })
        return { success: true }
      },

      logout: () => {
        set({ user: null, isAuthenticated: false })
      },

      hasPermission: (permission: string) => {
        const { user } = get()
        if (!user) return false

        // Super admin has all permissions
        if (user.permissions.includes("*")) return true

        // Check specific permission
        if (user.permissions.includes(permission)) return true

        // Check wildcard permissions (e.g., "products.*" matches "products.read")
        return user.permissions.some((p) => {
          if (p.endsWith(".*")) {
            const prefix = p.slice(0, -2)
            return permission.startsWith(prefix + ".")
          }
          return false
        })
      },

      hasRole: (role: UserRole) => {
        const { user } = get()
        return user?.role === role
      },
    }),
    {
      name: "admin-auth",
    },
  ),
)
