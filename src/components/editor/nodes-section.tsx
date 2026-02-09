import { Editor, useEditorState } from "@tiptap/react";
import HeadingPicker from "./heading-picker";
import ListPicker from "./list-picker";
import { Quote, SquareCode } from "lucide-react";
import { Toggle } from "../ui/toggle";

interface NodesSectionProps {
    editor: Editor
}

export default function NodesSection({ editor }: NodesSectionProps) {
    const editorState = useEditorState({ editor, selector: (ctx) => {
      return {
        isBlockquote: ctx.editor.isActive("blockquote") ?? false,
        isCodeBlock: ctx.editor.isActive("codeBlock") ?? false,
      }
    }})
    
    return (
        <div>
            <HeadingPicker editor={ editor } />
            <ListPicker editor={ editor } />
            
            <Toggle
                size={ "sm" }
                pressed={ editorState.isBlockquote }
                onPressedChange={ () => editor.chain().focus().toggleBlockquote().run() }
                className="cursor-pointer"
                aria-label="Toggle Blockquote"
                >
                <Quote />
            </Toggle>

            <Toggle
                size={ "sm" }
                pressed={ editorState.isCodeBlock }
                onPressedChange={ () => editor.chain().focus().toggleCodeBlock().run() }
                className="cursor-pointer"
                aria-label="Toggle Code Block"
                >
                <SquareCode />
            </Toggle>
        </div>
    )
}