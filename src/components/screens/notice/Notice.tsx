import { FC } from "react";

import { useAppSelector } from "@/hooks/Redux/useAppSelector";
import { useRouter } from "next/router";
import NoticeEdit from "./NoticeEdit/NoticeEdit";

import styles from "./Notice.module.scss";
import Description from "@/components/ui/heading/Description/Description";

const Notice: FC = () => {
  const { query } = useRouter();

  const note = useAppSelector((state) =>
    state.notes.notes.find((note) => note.id === query.id)
  );

  if (!note) return null;

  return (
    <div className={styles.Notice}>

      <div className={styles.noticeInfo}>
      <h2 className={styles.title}>{`"${note.title}"`}</h2>
      <Description text={note.description}/>
      </div>

      <NoticeEdit note={note} />

    </div>
  );
};

export default Notice;
