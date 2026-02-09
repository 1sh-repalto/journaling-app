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
      <div className="h-10 flex items-center justify-evenly w-auto mx-auto">
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