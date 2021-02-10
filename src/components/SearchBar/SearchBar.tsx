import React, { useEffect, useState } from "react";
import { cn } from "../../services/helpers/classname";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TagRelationType } from "../../store/graphql-global-types";
import { AutocompleteOption } from "./components/AutocompleteOption";

import "./styles.scss";
import { useOvermind } from "../../store";
import { useHistory } from "react-router-dom";

const block = cn("search-bar");

interface SearchResultItem {
  uid: string;
  title: string;
  type: TagRelationType;
}

export function SearchBar() {
  const { state, actions } = useOvermind();
  const history = useHistory()
  const [searchInput, setSearchInput] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // const results: SearchResultItem[] = [
  //   {
  //     title: "Моделирование процессов и производств нефтегазового комплекса",
  //     type: TagRelationType.major,
  //   },
  //   {
  //     title: "Прикладные математика и физика",
  //     type: TagRelationType.specialty,
  //   },
  //   {
  //     title: "Физика и астрономия",
  //     type: TagRelationType.program,
  //   },
  //   {
  //     title: "Информатика и вычислительная техника",
  //     type: TagRelationType.major,
  //   },
  // ];

  const [results, setResuls] = useState<SearchResultItem[]>([]);

  useEffect(() => {
    const job = async () => {
      setIsLoading(true)
      await actions.programs.getPrograms();
      await actions.specialties.getSpecialties();
      await actions.majors.getMajors();

      const data: SearchResultItem[] = [];
      state.programs.list.forEach((program) =>
        data.push({
          uid: program.uid,
          title: program.title,
          type: TagRelationType.program,
        })
      );
      state.specialties.list.forEach((specialty) =>
        data.push({
          uid: specialty.uid,
          title: specialty.title,
          type: TagRelationType.specialty,
        })
      );
      state.majors.list.forEach((major) =>
        data.push({
          uid: major.uid,
          title: major.title,
          type: TagRelationType.major,
        })
      );
      setResuls(data);
      setIsLoading(false)
    };

    job();
  }, []);

  const routeToItem = (item: SearchResultItem) => {
    switch (item.type) {
      case TagRelationType.program: {
        history.push(`/education/programs/${item.uid}`)
        break;
      }
      case TagRelationType.specialty: {
        history.push(`/education/specialties/${item.uid}`)
        break;
      }
      case TagRelationType.major: {
        history.push(`/education/majors/${item.uid}`)
        break;
      }
    }
  }

  return (
    <div className={block()}>
      <Autocomplete
        options={results}
        getOptionLabel={(option) => option.title}
        loading={isLoading}
        noOptionsText="Нет результатов"
        loadingText="Загрузка..."
        renderOption={(option) => (
          <AutocompleteOption
            title={option.title}
            type={option.type}
            searchInput={searchInput || ""}
          />
        )}
        onChange={(_, value) => value && routeToItem(value)}
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
