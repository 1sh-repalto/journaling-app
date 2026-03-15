import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ProtectedHeader } from "@/components/protected-header"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="h-screen flex flex-col w-full">
        <ProtectedHeader />
        <div className="h-full">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}