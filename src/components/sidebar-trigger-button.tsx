"use client"

import { PanelLeftOpen, PanelLeftClose, Menu } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function SidebarActionTrigger() {
  const { state, isMobile, toggleSidebar } = useSidebar()
  const isOpen = state === "expanded"

  return isMobile ? 
  (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      <Menu className="h-full w-full" />
    </Button>
  ) : 
  (
    <Button
      onClick={toggleSidebar}
      variant="outline"
      className="flex items-center rounded-md cursor-pointer"
    >
      {isOpen ? (
        <>
          <PanelLeftClose className="h-4 w-4" />
          <span>Close Sidebar</span>
        </>
      ) : (
        <>
          <PanelLeftOpen className="h-4 w-4" />
          <span>Open Sidebar</span>
        </>
      )}
    </Button>
  )
}
