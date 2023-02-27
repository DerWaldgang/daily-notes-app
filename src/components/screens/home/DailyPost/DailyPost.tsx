import { FC, FormEvent, memo, useState } from "react";
import { useActions } from "@/hooks/Redux/useActions";

import Button from "@/components/ui/button/Button";
import NoticeSubmitForm from "@/components/ui/form/NoticeSubmitForm/NoticeSubmitForm";
import Input from "@/components/ui/input/Input";
import TextEditor from "@/components/ui/input/TextEditor/TextEditor";
import Modal from "@/components/ui/modal/Modal";

import styles from "./DailyPost.module.scss";


const DailyPost: FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const { addNote } = useActions();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const titleNotEmpty = title.trim().length > 0;
    const descriptionNotEmpty = description.trim().length > 0;

    if (titleNotEmpty && descriptionNotEmpty ) {
      addNote({ title, description });
      setIsVisible(false);
      setTitle(" ");
      setDescription("");
    }

  };

  return (
    <div className={styles.DailyPost}>
      <Button onClick={() => setIsVisible(true)}>Create new notice</Button>
      <Modal isVisible={isVisible} setIsVisible={setIsVisible}>
        <NoticeSubmitForm onSubmit={(e) => handleSubmit(e)}>
          <Input
            onChange={setTitle}
            type="text"
            value={title}
            placeholder="Title..."
          />
          <TextEditor
            value={description}
            placeholder="Description"
            onChange={setDescription}
          />
        </NoticeSubmitForm>
      </Modal>
    </div>
  );
};

export default DailyPost;
