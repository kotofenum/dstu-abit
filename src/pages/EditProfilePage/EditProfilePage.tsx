import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import { cn } from "../../services/helpers/classname";
import { ICity, ICountry, ICountryCities } from "../RegisterPage/RegisterPage";

import countriesJson from "../RegisterPage/countries.json";
import citiesJson from "../RegisterPage/cities.json";

import "./styles.scss";

const block = cn("edit-profile-page");

const countries: ICountry[] = countriesJson;
const cities: ICountryCities = citiesJson;

export function EditProfilePage() {
  const [country, setCountry] = useState<ICountry | null>();
  const [location, setLocation] = useState<ICity | null>();

  return (
    <div className={block()}>
      <span className={block("heading")}>Редактирование профиля</span>

      <Autocomplete
        options={countries}
        getOptionLabel={(option) => option.name}
        onChange={(_, value) => setCountry(value)}
        renderInput={(params) => (
          <TextField label="Страна" value={country?.name} {...params} />
        )}
      />

      <Autocomplete
        key={country?.id}
        disabled={!country}
        options={country ? cities[country.id] : []}
        getOptionLabel={(option) => option.name}
        onChange={(_, value) => setLocation(value)}
        renderInput={(params) => (
          <TextField
            label="Населенный пункт"
            value={location?.name}
            {...params}
          />
        )}
      />
    </div>
  );
}
