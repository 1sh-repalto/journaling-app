"use client"

import { useEditor, EditorContent, Editor, useEditorState } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import StarterKit from '@tiptap/starter-kit'
import { Toggle } from "@/components/ui/toggle"
import { Bold, Highlighter, Italic, Underline, Undo } from 'lucide-react'
import Highlight from '@tiptap/extension-highlight'
import UndoRedoSection from './undo-redo-section'
import { HighlightPicker } from './highlight-picker'

const Toolbar = ({ editor }: { editor: Editor }) => {
    const editorState = useEditorState({ editor, selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        isItalic: ctx.editor.isActive("italic") ?? false,
        isUnderline: ctx.editor.isActive("underline") ?? false,
        isHighlight: ctx.editor.isActive("highlight") ?? false,
      }
    }})

    return (
      <>
        <UndoRedoSection editor={ editor } />

        <HighlightPicker editor={ editor } />

        <Toggle
          size={ "sm" }
          pressed={ editorState.isBold }
          onPressedChange={ () => editor.chain().focus().toggleBold().run() }
          aria-label="Toggle Bold"
        >
          <Bold />
        </Toggle>

        <Toggle
          size={ "sm" }
          pressed={ editorState.isItalic }
          onPressedChange={ () => editor.chain().focus().toggleItalic().run() }
          aria-label="Toggle Italic"
        >
          <Italic />
        </Toggle>

        <Toggle
          size={ "sm" }
          pressed={ editorState.isUnderline }
          onPressedChange={ () => editor.chain().focus().toggleUnderline().run() }
          aria-label="Toggle Underline"
        >
          <Underline />
        </Toggle>
      </>
    )
}

export default function Tiptap() {
  const editor = useEditor({
    extensions: [StarterKit, Highlight.configure({ multicolor: true })], // define your extension array
    content: '<p>Hello World!</p>', // initial content
    immediatelyRender: false,
  })

  if(!editor) return null;

  return (
    <>
      <Toolbar editor={ editor } />
      <EditorContent editor={editor} />
      {/* <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu> */}
    </>
  )
}