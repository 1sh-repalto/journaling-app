"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import Toolbar from './toolbar'
import { editorExtensions } from './extensions'

export default function Tiptap() {
  const editor = useEditor({
    extensions: editorExtensions,
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