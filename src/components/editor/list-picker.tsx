import { Editor, useEditorState } from "@tiptap/react"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { ChevronDown, List, ListOrdered, ListTodo } from "lucide-react"

interface ListPickerProps {
    editor: Editor
}

const LISTS = [
    { type: "bulletList", label: "Bullet List", icon: List },
    { type: "orderedList", label: "Ordered List", icon: ListOrdered },
    { type:"taskList", label: "Todo List", icon: ListTodo },
] as const

export default function ListPicker({ editor }: ListPickerProps) {
    const [isOpen, setIsOpen] = useState(false)

    const editorState = useEditorState({ editor, selector: (ctx) => {
        const activeList = LISTS.find(l => ctx.editor.isActive(l.type))

        return {
            currentList: activeList?.type,
            isList: !!activeList,
        }
    }})

    const setList = (type: string) => {
        if(type === "bulletList") {
            editor.chain().focus().toggleBulletList().run()
        } else if(type === "orderedList") {
            editor.chain().focus().toggleOrderedList().run()
        } else if(type === "taskList") {
            editor.chain().focus().toggleTaskList().run()
        }
    }

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant={isOpen || editorState.isList ? "secondary" : "ghost"}
                    size="sm"
                    className="cursor-pointer"
                >
                    <List />
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
            {LISTS.map((list) => (
                <DropdownMenuItem
                    key={list.type}
                    className={`cursor-pointer outline-none ${editorState.currentList === list.type ? "bg-secondary" : ""}`}
                    onClick={() => setList(list.type)}
                    aria-label={list.label}
                >
                    <list.icon />
                    <span>{list.label}</span>
                </DropdownMenuItem>
            ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}