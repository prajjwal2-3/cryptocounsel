'use client'
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Toolbar from "./Toolbar"
import { content } from "./content"
import useTemplateStore from "@/store/template-store"

import TextAlign from "@tiptap/extension-text"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"
import Heading from "@tiptap/extension-heading"
import Blockquote from "@tiptap/extension-blockquote"
import Image from "@tiptap/extension-image"
import Document from '@tiptap/extension-document'
import Placeholder from '@tiptap/extension-placeholder'
import CodeBlock from "@tiptap/extension-code-block"
import BulletList from '@tiptap/extension-bullet-list'
import Highlight from '@tiptap/extension-highlight'

const CustomDocument = Document.extend({
    content: 'heading block*',
})

const Editor = () => {
    const {selectedTemplate } = useTemplateStore();

    const editor = useEditor({
        immediatelyRender:false,
        extensions: [
            CustomDocument,
            Placeholder.configure({
               
                placeholder: ({ node }) => {
                    if (node.type.name === 'heading') {
                        return 'What’s the title?';
                    }
                    return 'Can you add some further context?';
                },
            }),
            StarterKit.configure(),
            TextAlign.configure({
                types: ['paragraph'],
            }),
            Underline.configure(),
            Highlight.configure(),
            Link.configure(),
            Heading.configure({
                levels: [1, 2, 3],
            }),
            Blockquote.configure(),
            Image.configure({
                inline: false
            }),
            CodeBlock.configure(),
            BulletList.configure(),
        ],
        content: selectedTemplate?.content,
        editorProps: {
            attributes: {
                class: 'outline-0',
            }
        }
    },[selectedTemplate])

    return (
        <>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} spellCheck="false" />
           
        </>
    )

}

export default Editor