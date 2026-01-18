"use client"

import { PanelLeftOpen, PanelLeftClose } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function SidebarActionTrigger() {
  const { state, toggleSidebar } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Button
      onClick={toggleSidebar}
      variant="outline"
      className="flex items-center rounded-md cursor-pointer"
    >
      {isCollapsed ? (
        <>
          <PanelLeftOpen className="h-4 w-4" />
          <span>Open Sidebar</span>
        </>
      ) : (
        <>
          <PanelLeftClose className="h-4 w-4" />
          <span>Close Sidebar</span>
        </>
      )}
    </Button>
  )
}
