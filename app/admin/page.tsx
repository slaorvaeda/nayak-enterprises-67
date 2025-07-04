"use client"
import { AdminDashboard } from "@/components/admin/admin-dashboard"
import { AuthGuard } from "@/components/admin/auth-guard"

// Demo admin accounts
const demoAccounts = [
  { email: "admin@nayak.com", password: "admin123", role: "Super Admin" },
  { email: "manager@nayak.com", password: "manager123", role: "Manager" },
  { email: "viewer@nayak.com", password: "viewer123", role: "Viewer" },
]

export default function AdminPage() {
  return (
    <AuthGuard>
      <AdminDashboard />
    </AuthGuard>
  )
}
