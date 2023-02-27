import { FC } from "react";
import { useActions } from "@/hooks/Redux/useActions";

import Button from "@/components/ui/button/Button";
import Description from "@/components/ui/heading/Description/Description";
import Link from "next/link";
import Moment from "react-moment";

import { INotes } from "@/types/notes.types";
import styles from "./DailyCard.module.scss";

interface IDailyCard {
  note: INotes
}
const DailyCard: FC<IDailyCard> = ({ note }) => {

  const { deleteNote } = useActions();

  return (
    <div className={styles.DailyCard}>
      <div className={styles.card}>
        <h4 className={styles.title}>{`"${note.title}"`}</h4>
        <div className={styles.description}>
          <Description text={note.description} />
        </div>
        {note.createdAt && (
          <Moment format="MMMM Do YYYY, hh:mm:ss" className={styles.date}>
            {note.createdAt.toString()}
          </Moment>
        )}

        <Link href={`${note.id}`} className={styles.link}>
          <div>See more...</div> 
        </Link>

      </div>

      <Button
        onClick={() => {
          deleteNote(note);
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default DailyCard;
