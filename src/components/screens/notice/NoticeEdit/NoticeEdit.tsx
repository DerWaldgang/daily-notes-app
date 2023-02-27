import { FC, FormEvent, useEffect, useState } from "react";
import { useActions } from "@/hooks/Redux/useActions";

import Button from "@/components/ui/button/Button";
import NoticeSubmitForm from "@/components/ui/form/NoticeSubmitForm/NoticeSubmitForm";
import Input from "@/components/ui/input/Input";
import TextEditor from "@/components/ui/input/TextEditor/TextEditor";
import Modal from "@/components/ui/modal/Modal";

import { INotes } from "@/types/notes.types";
import styles from './NoticeEdit.module.scss' 

interface INoticeEdit {
  note: INotes;
}

const NoticeEdit: FC<INoticeEdit> = ({ note }) => {
  const { editNoteDescription, editNoteTitle } = useActions();
  const [newDescription, setNewDescription] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setNewDescription(note.description);
    setNewTitle(note.title);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const id = note.id;

    const description = newDescription;
    const title = newTitle;

    const titleNotEmpty = title.trim().length > 0;
    const descriptionNotEmpty = description.trim().length > 0;

    if (titleNotEmpty && descriptionNotEmpty) {
      editNoteDescription({ id, description });
      editNoteTitle({ id, title });
      setIsVisible(false);
    }
  };

  return (
    <div className={styles.NoticeEdit}>
      <Button onClick={() => setIsVisible(true)}>Edit the notice</Button>
      <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
        <NoticeSubmitForm onSubmit={(e) => handleSubmit(e)}>
          <Input onChange={setNewTitle} value={newTitle} />
          <TextEditor
            value={newDescription}
            placeholder="Description"
            onChange={setNewDescription}
          />
        </NoticeSubmitForm>
      </Modal>
    </div>
  );
};

export default NoticeEdit;
