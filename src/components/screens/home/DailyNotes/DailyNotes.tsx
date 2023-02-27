import { FC, useMemo } from "react";

import DailyCard from "../DailyCard/DailyCard";
import DailyPost from "../DailyPost/DailyPost";
import Select from "@/components/ui/select/Select";

import { INotes } from "@/types/notes.types";
import styles from "./DailyNotes.module.scss";

interface IDailyNotes {
  notes: INotes[]
}
const DailyNotes: FC<IDailyNotes> = ({ notes }) => {

  const options = useMemo(
    () => [
      { value: "new", text: "Новые" },
      { value: "old", text: "Старые" },
    ],
    []
  );

  return (
    <div className={styles.DailyNotes}>
      <DailyPost />
      <Select options={options} />
      {notes.map((note) => {
        return <DailyCard key={note.id} note={note} />;
      })}
    </div>
  );
};

export default DailyNotes;
