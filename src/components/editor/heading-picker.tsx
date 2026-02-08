import { Level } from "@tiptap/extension-heading";
import { Editor, useEditorState } from "@tiptap/react"
import { Button } from "../ui/button";
import { ChevronDown, Heading, Heading1, Heading2, Heading3 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "../ui/dropdown-menu";
import { useState } from "react";
import { Toggle } from "../ui/toggle";

const HEADINGS = [
  { level: 2, label: "Heading 1", icon: Heading1 },
  { level: 3, label: "Heading 2", icon: Heading2 },
  { level: 4, label: "Heading 3", icon: Heading3 },
] as const

interface HeadingPickerProps {
    editor: Editor
}

export default function HeadingPicker({ editor }: HeadingPickerProps) {
    const [isOpen, setIsOpen] = useState(false)
    
    const editorState = useEditorState({
        editor,
        selector: (ctx) => {
            const currentLevel = HEADINGS.find(h => 
            ctx.editor.isActive("heading", { level: h.level })
            )?.level

            return {
                currentLevel,
                isHeading: !!currentLevel,
            }
        }
    })

    const setHeading = (level: number) => {
        editor.chain().focus().toggleHeading({ level: level as Level }).run()
    }

    const activeHeading = HEADINGS.find(h => h.level === editorState.currentLevel)

    const ActiveIcon = activeHeading?.icon || Heading

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant={isOpen || editorState.isHeading ? "secondary" : "ghost"}
                    size="sm"
                    className="cursor-pointer"
                >
                    <ActiveIcon />
                    <ChevronDown />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent 
                align="start" 
                className="space-y-1"
                onCloseAutoFocus={(e) => {
                    e.preventDefault()
                    editor.commands.focus()
                }}
            >
            {HEADINGS.map((heading) => (
                <DropdownMenuItem
                    key={heading.level}
                    className={ `cursor-pointer outline-none ${editorState.currentLevel === heading.level ? "bg-secondary" : ""}` }
                    onClick={ () => setHeading(heading.level) }
                    aria-label={ `Heading ${heading.level}` }
                >
                    <heading.icon />
                    <span>{heading.label}</span>
                </DropdownMenuItem>
            ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}