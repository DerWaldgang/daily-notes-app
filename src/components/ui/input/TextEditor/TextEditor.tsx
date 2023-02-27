import { FC, useEffect, useState } from "react";

import { ContentState, EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import dynamic from "next/dynamic";

let Editor:any = null
if(typeof window === 'object') {
	 Editor = dynamic(() => import('react-draft-wysiwyg').then(mod => mod.Editor));
}

import { ITextEditor } from "@/types/text-editor.types";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./TextEditor.module.scss";
import Button from "../../button/Button";

const TextEditor: FC<ITextEditor> = ({ value, label, onChange }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    if (isUpdated) return;

    const defaultValue = value || "";
    const blockFromHtml = htmlToDraft(defaultValue);

    const contentState = ContentState.createFromBlockArray(
      blockFromHtml.contentBlocks,
      blockFromHtml.entityMap
    );

    const newEditorState = EditorState.createWithContent(contentState);

    setEditorState(newEditorState);
  }, [isUpdated, value]);

  const onEditorStateChange = (editorState: EditorState) => {
    setIsUpdated(true);
    setEditorState(editorState);
    const description = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    onChange(description);
  };

  return (
    <div className={styles.TextEditor}>
      {label && <label className={styles.label}>{label}</label>}

      <div className={styles.wrapper}>
        <Editor
          toolbarClassName={styles.toolbar}
          editorClassName={styles.editor}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          spellCheck
          toolbar={{
            options: ["inline", "list"],
            inline: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ["bold", "italic", "underline", "strikethrough"],
            },
            list: {
              inDrodown: false,
              options: ["unordered", "ordered"],
            },
          }}
        />
      </div>
      <Button onClick={e => {
        e.preventDefault()
        setEditorState(EditorState.createEmpty())
      }}>Clear</Button>
    </div>
  );
};

export default TextEditor;
