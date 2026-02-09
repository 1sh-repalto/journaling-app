"use client"

import { useEditor, EditorContent, Editor, useEditorState } from '@tiptap/react'
import { FloatingMenu, BubbleMenu } from '@tiptap/react/menus'
import Heading from '@tiptap/extension-heading'
import { Toggle } from "@/components/ui/toggle"
import { Bold as BoldIcon, Italic as ItalicIcon, Quote, SquareCode, Strikethrough, SubscriptIcon, Superscript as SuperscriptIcon, Underline as UnderlineIcon } from 'lucide-react'
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
import Strike from '@tiptap/extension-strike'
import Blockquote from '@tiptap/extension-blockquote'
import TextAlign from '@tiptap/extension-text-align'
import TextAlignGroup from './text-align-group'
import { BulletList, ListItem, OrderedList, TaskList, TaskItem } from '@tiptap/extension-list'
import ListPicker from './list-picker'
import CodeBlock from '@tiptap/extension-code-block'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'

const Toolbar = ({ editor }: { editor: Editor }) => {
    const editorState = useEditorState({ editor, selector: (ctx) => {
      return {
        isBold: ctx.editor.isActive("bold") ?? false,
        isItalic: ctx.editor.isActive("italic") ?? false,
        isUnderline: ctx.editor.isActive("underline") ?? false,
        isStrike: ctx.editor.isActive("strike") ?? false,
        isHighlight: ctx.editor.isActive("highlight") ?? false,
        isBlockquote: ctx.editor.isActive("blockquote") ?? false,
        isCodeBlock: ctx.editor.isActive("codeBlock") ?? false,
        isSuperscript: ctx.editor.isActive("superscript") ?? false,
        isSubscript: ctx.editor.isActive("subscript") ?? false,
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
          pressed={ editorState.isCodeBlock }
          onPressedChange={ () => editor.chain().focus().toggleCodeBlock().run() }
          className="cursor-pointer"
          aria-label="Toggle Code Block"
        >
          <SquareCode />
        </Toggle>

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
          pressed={ editorState.isBold }
          onPressedChange={ () => editor.chain().focus().toggleBold().run() }
          className="cursor-pointer"
          aria-label="Toggle Bold"
        >
          <BoldIcon />
        </Toggle>

        <Toggle
          size={ "sm" }
          pressed={ editorState.isItalic }
          onPressedChange={ () => editor.chain().focus().toggleItalic().run() }
          className="cursor-pointer"
          aria-label="Toggle Italic"
        >
          <ItalicIcon />
        </Toggle>

        <Toggle
          size={ "sm" }
          pressed={ editorState.isUnderline }
          onPressedChange={ () => editor.chain().focus().toggleUnderline().run() }
          className="cursor-pointer"
          aria-label="Toggle Underline"
        >
          <UnderlineIcon />
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

        <Toggle
          size={ "sm" }
          pressed={ editorState.isSuperscript }
          onPressedChange={ () => editor.chain().focus().toggleSuperscript().run() }
          className="cursor-pointer"
          aria-label="Toggle Superscript"
        >
          <SuperscriptIcon />
        </Toggle>

        <Toggle
          size={ "sm" }
          pressed={ editorState.isSubscript }
          onPressedChange={ () => editor.chain().focus().toggleSubscript().run() }
          className="cursor-pointer"
          aria-label="Toggle Subscript"
        >
          <SubscriptIcon />
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
      Strike,
      Blockquote,
      BulletList,
      OrderedList,
      TaskList,
      ListItem,
      TaskItem,
      CodeBlock,
      Superscript,
      Subscript,
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