"use client"

import { useEditor, EditorContent, Editor, useEditorState } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import Heading from '@tiptap/extension-heading'
import { Toggle } from "@/components/ui/toggle"
import { Bold as BoldIcon, Italic as ItalicIcon, Quote, Underline as UnderlineIcon } from 'lucide-react'
import Highlight from '@tiptap/extension-highlight'
import UndoRedoSection from './undo-redo-section'
import { HighlightPicker } from './highlight-picker'
import HeadingPicker from './heading-picker'
import Paragraph from '@tiptap/extension-paragraph'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import History from '@tiptap/extension-history'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Blockquote from '@tiptap/extension-blockquote'
import TextAlign from '@tiptap/extension-text-align'
import TextAlignGroup from './text-align-group'
import { BulletList, ListItem, OrderedList, TaskList, TaskItem } from '@tiptap/extension-list'
import ListPicker from './list-picker'

const Toolbar = ({ editor }: { editor: Editor }) => {
    const editorState = useEditorState({ editor, selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        isItalic: ctx.editor.isActive("italic") ?? false,
        isUnderline: ctx.editor.isActive("underline") ?? false,
        isHighlight: ctx.editor.isActive("highlight") ?? false,
        isBlockquote: ctx.editor.isActive("blockquote") ?? false,
      }
    }})

    return (
      <>
        <UndoRedoSection editor={ editor } />

        <HighlightPicker editor={ editor } />

        <HeadingPicker editor={ editor } />

        <TextAlignGroup editor={ editor } />

        <ListPicker editor={ editor } />

        <Toggle
          size={ "sm" }
          pressed={ editorState.isBlockquote }
          onPressedChange={ () => editor.chain().focus().toggleBlockquote().run() }
          aria-label="Toggle Blockquote"
        >
          <Quote />
        </Toggle>

        <Toggle
          size={ "sm" }
          pressed={ editorState.isBold }
          onPressedChange={ () => editor.chain().focus().toggleBold().run() }
          aria-label="Toggle Bold"
        >
          <BoldIcon />
        </Toggle>

        <Toggle
          size={ "sm" }
          pressed={ editorState.isItalic }
          onPressedChange={ () => editor.chain().focus().toggleItalic().run() }
          aria-label="Toggle Italic"
        >
          <ItalicIcon />
        </Toggle>

        <Toggle
          size={ "sm" }
          pressed={ editorState.isUnderline }
          onPressedChange={ () => editor.chain().focus().toggleUnderline().run() }
          aria-label="Toggle Underline"
        >
          <UnderlineIcon />
        </Toggle>
      </>
    )
}

export default function Tiptap() {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Underline,
      Blockquote,
      BulletList,
      OrderedList,
      TaskList,
      ListItem,
      TaskItem,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Heading.configure({
        levels: [2, 3, 4],
      }),
      History,
    ],
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