// Core
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'

// Marks
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import Highlight from '@tiptap/extension-highlight'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'

// Nodes
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlock from '@tiptap/extension-code-block'
import Heading from '@tiptap/extension-heading'

// Lists
import {
  BulletList,
  OrderedList,
  TaskList,
  TaskItem,
  ListItem,
} from '@tiptap/extension-list'

// Utilities
import TextAlign from '@tiptap/extension-text-align'
import History from '@tiptap/extension-history'

export const editorExtensions = [
  Document,
  Paragraph,
  Text,

  Bold,
  Italic,
  Underline,
  Strike,
  Superscript,
  Subscript,

  Blockquote,
  CodeBlock,

  BulletList,
  OrderedList,
  TaskList,
  TaskItem,
  ListItem,

  Highlight.configure({
    multicolor: true,
  }),

  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),

  Heading.configure({
    levels: [2, 3, 4],
  }),

  History,
]
