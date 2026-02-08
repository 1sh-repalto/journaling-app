import { Editor, useEditorState } from "@tiptap/react"
import { Toggle } from "../ui/toggle"
import { TextAlignCenter, TextAlignEnd, TextAlignStart } from "lucide-react"

interface TextAlignGroupProps {
    editor: Editor
}

export default function TextAlignGroup({ editor }: TextAlignGroupProps) {
    const editorState = useEditorState({ editor, selector: (ctx) => {
        return {
            isLeft: ctx.editor.isActive({ textAlign: "left" }),
            isCenter: ctx.editor.isActive({ textAlign: "center" }),
            isRight: ctx.editor.isActive({ textAlign: "right" }),
        }
    }})

    return (
        <>
            <Toggle
                size={ "sm" }
                pressed={ editorState.isLeft }
                onPressedChange={ () => editor.chain().focus().toggleTextAlign("left").run() }
                className="cursor-pointer"
                aria-label="Toggle Left Align"
            >
                <TextAlignStart />
            </Toggle>

            <Toggle
                size={ "sm" }
                pressed={ editorState.isCenter }
                onPressedChange={ () => editor.chain().focus().toggleTextAlign("center").run() }
                className="cursor-pointer"
                aria-label="Toggle Center Align"
            >
                <TextAlignCenter />
            </Toggle>

            <Toggle
                size={ "sm" }
                pressed={ editorState.isRight }
                onPressedChange={ () => editor.chain().focus().toggleTextAlign("right").run() }
                className="cursor-pointer"
                aria-label="Toggle Right Align"
            >
                <TextAlignEnd />
            </Toggle>
        
        </>
    )
}