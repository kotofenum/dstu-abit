import React, { useState } from "react";
import { cn } from "../../services/helpers/classname";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TagRelationType } from "../../store/graphql-global-types";
import { AutocompleteOption } from "./components/AutocompleteOption";

import "./styles.scss";

const block = cn("search-bar");

interface SearchResultItem {
  title: string;
  type: TagRelationType;
}

export function SearchBar() {
  const [searchInput, setSearchInput] = useState<string | null>(null);

  const results: SearchResultItem[] = [
    {
      title: "Моделирование процессов и производств нефтегазового комплекса",
      type: TagRelationType.major,
    },
    {
      title: "Прикладные математика и физика",
      type: TagRelationType.specialty,
    },
    {
      title: "Физика и астрономия",
      type: TagRelationType.program,
    },
    {
      title: "Информатика и вычислительная техника",
      type: TagRelationType.major,
    },
  ];

  return (
    <div className={block()}>
      <Autocomplete
        options={results}
        getOptionLabel={(option) => option.title}
        renderOption={(option) => (
          <AutocompleteOption
            title={option.title}
            type={option.type}
            searchInput={searchInput || ""}
          />
        )}
        renderInput={(params) => (
          <TextField
            label="Поиск по базе знаний"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            {...params}
          />
        )}
      />
    </div>
  );
}
