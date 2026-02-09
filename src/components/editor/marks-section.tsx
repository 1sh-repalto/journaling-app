import { Editor, useEditorState } from "@tiptap/react"
import { Bold, Italic, Strikethrough, Subscript, SubscriptIcon, Superscript, Underline } from "lucide-react"
import { Toggle } from "../ui/toggle"
import { HighlightPicker } from "./highlight-picker"

interface MarksSectionProps {
    editor: Editor
}

export default function MarksSection({ editor }: MarksSectionProps) {
    const editorState = useEditorState({ editor, selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        isItalic: ctx.editor.isActive("italic") ?? false,
        isUnderline: ctx.editor.isActive("underline") ?? false,
        isStrike: ctx.editor.isActive("strike") ?? false,
        isHighlight: ctx.editor.isActive("highlight") ?? false,
        isSuperscript: ctx.editor.isActive("superscript") ?? false,
        isSubscript: ctx.editor.isActive("subscript") ?? false,
      }
    }})
    
    return (
        <div>
            <Toggle
                size={ "sm" }
                pressed={ editorState.isBold }
                onPressedChange={ () => editor.chain().focus().toggleBold().run() }
                className="cursor-pointer"
                aria-label="Toggle Bold"
                >
                <Bold />
            </Toggle>

            <Toggle
                size={ "sm" }
                pressed={ editorState.isItalic }
                onPressedChange={ () => editor.chain().focus().toggleItalic().run() }
                className="cursor-pointer"
                aria-label="Toggle Italic"
                >
                <Italic />
            </Toggle>

            <Toggle
                size={ "sm" }
                pressed={ editorState.isUnderline }
                onPressedChange={ () => editor.chain().focus().toggleUnderline().run() }
                className="cursor-pointer"
                aria-label="Toggle Underline"
                >
                <Underline />
            </Toggle>

            <Toggle
                size={ "sm" }
                pressed={ editorState.isStrike }
                onPressedChange={ () => editor.chain().focus().toggleStrike().run() }
                className="cursor-pointer"
                aria-label="Toggle Strike"
                >
                <Strikethrough />
            </Toggle>

            <HighlightPicker editor={ editor } />

            <Toggle
                size={ "sm" }
                pressed={ editorState.isSuperscript }
                onPressedChange={ () => editor.chain().focus().toggleSuperscript().run() }
                className="cursor-pointer"
                aria-label="Toggle Superscript"
                >
                <Superscript />
            </Toggle>

            <Toggle
                size={ "sm" }
                pressed={ editorState.isSubscript }
                onPressedChange={ () => editor.chain().focus().toggleSubscript().run() }
                className="cursor-pointer"
                aria-label="Toggle Subscript"
                >
                <Subscript />
            </Toggle>
        </div>
    )
}