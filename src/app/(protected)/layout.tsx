import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeToggle } from "@/components/mode-toggle"
import { SidebarActionTrigger } from "@/components/sidebar-trigger-button"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="py-2 px-4 flex justify-between items-center">
          <SidebarActionTrigger />
          <ThemeToggle />
        </div>
        {children}
      </main>
    </SidebarProvider>
  )
}