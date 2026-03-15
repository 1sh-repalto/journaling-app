import { Editor } from "@tiptap/react"
import MarksSection from "./marks-section"
import NodesSection from "./nodes-section"
import TextAlignGroup from "./text-align-group"
import UndoRedoSection from "./undo-redo-section"
import { Separator } from "../ui/separator"

interface ToolbarProps {
    editor: Editor
}

export default function Toolbar ({ editor }: ToolbarProps) {
    return (
      <div className="sticky top-0 z-100 w-full bg-background flex items-center justify-evenly mx-auto">
        <UndoRedoSection editor={ editor } />

        <Separator orientation="vertical" className="h-full"/>

        <NodesSection editor={ editor } />

        <Separator orientation="vertical" className="h-full"/>

        <MarksSection editor={ editor } />

        <Separator orientation="vertical" className="h-full"/>

        <TextAlignGroup editor={ editor } />
      </div>
    )
}