import { FC } from "react";
import Input from "../Input";

interface ISearchField {
  search: string;
  setSearch: (event: any) => void;
}

const SearchField: FC<ISearchField> = ({ search, setSearch }) => {
  return (
    <Input
      value={search}
      onChange={setSearch}
      type="search"
      placeholder="Search..."
      label="Go to Search"
    />
  );
};

export default SearchField;
