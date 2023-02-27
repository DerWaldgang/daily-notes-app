import { FC, useMemo, useState } from "react";
import { useAppSelector } from "@/hooks/Redux/useAppSelector";

import SearchField from "@/components/ui/input/SearchField/SearchField";
import DailyNotes from "./DailyNotes/DailyNotes";

import styles from "./Daily.module.scss";

const Daily: FC = () => {
  const notes = useAppSelector((state) => state.notes.notes);
  const [search, setSearch] = useState("");

  const filterNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(search?.toLowerCase())
    );
  }, [search, notes]);

  return (
    <section className={styles.Daily}>
      <SearchField setSearch={setSearch} search={search} />
      <DailyNotes notes={filterNotes} />
      {!notes.length && <div className={styles.empty}>Добавьте запись</div>}
      {filterNotes.length === 0 && notes.length !== 0 ? <div className={styles.notFound}>Запись не найдена</div> : null}
    </section>
  );
};

export default Daily;
