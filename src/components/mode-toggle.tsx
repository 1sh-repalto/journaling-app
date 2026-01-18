"use client"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Computer, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
	const [defaultValue, setDefaultValue] = useState("")
  const { theme, setTheme } = useTheme()

	useEffect(() => {
		if (theme) setDefaultValue(theme);
	}, [theme])

  return (
    <TooltipProvider delayDuration={0}>
      <ToggleGroup
				type="single"
				value={defaultValue}
				disabled={!defaultValue}
				className="rounded-md border bg-muted"
				>
					<Tooltip>
						<TooltipTrigger asChild>
							<ToggleGroupItem
								value="system"
								onClick={() => setTheme("system")}
								className="h-9 cursor-pointer aria-checked:border aria-checked:bg-background"
							>
								<Computer />
							</ToggleGroupItem>
						</TooltipTrigger>
						<TooltipContent>System</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<ToggleGroupItem
								value="light"
								onClick={() => setTheme("light")}
								className="h-9 cursor-pointer aria-checked:border aria-checked:bg-background"
							>
								<Sun />
							</ToggleGroupItem>
						</TooltipTrigger>
						<TooltipContent>Light</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<ToggleGroupItem
								value="dark"
								onClick={() => setTheme("dark")}
								className="h-9 cursor-pointer aria-checked:border aria-checked:bg-background"
							>
								<Moon />
							</ToggleGroupItem>
						</TooltipTrigger>
						<TooltipContent>Dark</TooltipContent>
					</Tooltip>
				</ToggleGroup>
    </TooltipProvider>
  )
}
