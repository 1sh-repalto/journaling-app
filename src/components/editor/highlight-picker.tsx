"use client"

import { useState } from "react"
import { Editor, useEditorState } from "@tiptap/react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { Ban, Highlighter } from "lucide-react"
import { Separator } from "../ui/separator"
import { Toggle } from "../ui/toggle"

const HIGHLIGHT_COLORS = [
    { name: "Green", color: "#509568", borderColor: "#70D092" },
    { name: "Blue", color: "#6D92AA", borderColor: "#99CCEE" },   
    { name: "Red", color: "#743E42", borderColor: "#A3575D" },    
    { name: "Purple", color: "#583E74", borderColor: "#9E6FD1" }, 
    { name: "Yellow", color: "#6B6523", borderColor: "#958D30" }, 
]

interface HighlightPickerProps {
    editor: Editor
}

export function HighlightPicker({ editor }: HighlightPickerProps) {
    const [isOpen, setIsOpen] = useState(false)

    const editorState = useEditorState({
        editor, selector: (ctx) => {
            return {
                isHighlight: ctx.editor.isActive("highlight") ?? false,
                currentHighlightColor: ctx.editor.getAttributes("highlight").color,
            }
        }
    })

    const setHighlight = (color: string) => {
        editor.chain().focus().setHighlight({ color }).run()
    }

    const unsetHighlight = () => {
        editor.chain().focus().unsetHighlight().run()
    }

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant={(isOpen || editorState.isHighlight) ? "secondary" : "ghost"}
                    size="sm"
                    aria-label="Highlight Color"
                >
                    <Highlighter />
                </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-2 rounded-full">
                <div className="h-6 flex items-center">
                    {/* Color options */}
                    {HIGHLIGHT_COLORS.map((highlight) => (
                        <Toggle 
                            key={ highlight.color }
                            pressed={ editorState.currentHighlightColor === highlight.color }
                            onPressedChange={() => setHighlight(highlight.color)}
                            className="flex items-center rounded-f hover:bg-secondary"
                            aria-label={`Highlight ${highlight.name}`}
                        >
                            <span
                                className="w-5 h-5 rounded-full border"
                                style={{ backgroundColor: highlight.color, borderColor: highlight.borderColor }}
                            />
                        </Toggle>
                    ))}

                    <Separator orientation="vertical" className="mx-1" />

                    {/* No highlight option */}
                    <Button 
                        variant={ "ghost" } 
                        size={ "sm" } 
                        onClick={ unsetHighlight }
                        className="flex items-center rounded-full"
                        aria-label="Remove Highlight"
                    >
                        <Ban size={ 20 } />
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}