import { Editor } from "@tiptap/react";
import { UndoRedoButton } from "../tiptap-ui/undo-redo-button";

export default function UndoRedoSection({ editor }: { editor: Editor }) {
    return (
        <div className="flex items-center">
            <UndoRedoButton 
                editor={ editor }
                action="undo"
                hideWhenUnavailable={ false }
                className="cursor-pointer"
                aria-label="Undo Button"
            />
            
            <UndoRedoButton 
                editor={ editor }
                action="redo"
                hideWhenUnavailable={ false }
                className="cursor-pointer"
                aria-label="Redo Button"
            />
        </div>
    )
}