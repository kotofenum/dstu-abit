import { Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useCallback, useEffect, useState } from "react";
import { cn } from "../../services/helpers/classname";
import { ICity, ICountry, ICountryCities } from "../RegisterPage/RegisterPage";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { ru } from "date-fns/locale";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import countriesJson from "../RegisterPage/countries.json";
import citiesJson from "../RegisterPage/cities.json";

import "./styles.scss";
import { useOvermind } from "../../store";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";

const block = cn("edit-profile-page");

const countries: ICountry[] = countriesJson;
const cities: ICountryCities = citiesJson;

export function EditProfilePage() {
  const { state, actions } = useOvermind();
  const { addToast } = useToasts();
  const history = useHistory();

  const [country, setCountry] = useState<ICountry | null>(null);
  const [location, setLocation] = useState<ICity | null>(null);
  const [birthdate, setBirthdate] = useState(null);
  const [school, setSchool] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (state.auth.user) {
      const country = countries.find(
        (country) => country.name === state.auth.user?.country
      );
      if (country) {
        setCountry(country);
      }

      const cntry = Object.values(cities).find((country) =>
        country.find((city) => city.name === state.auth.user?.locality)
      );
      const city = cntry?.find(
        (city) => city.name === state.auth.user?.locality
      );
      if (city) {
        setLocation(city);
      }

      setBirthdate(state.auth.user.birthDate);
      setSchool(state.auth.user.school);
      setEmail(state.auth.user.email);
    }
  }, [state.auth.user]);

  const editUser = useCallback(async () => {
    setLoading(true);
    await actions.auth.editUser({
      country: country?.name || null,
      locality: location?.name || null,
      birthDate: birthdate,
      school: school,
      email: email,
      position: null,
      child: null,
      course: null,
    });
    setLoading(false);
    addToast(`Изменения сохранены`, {
      appearance: "success",
      autoDismiss: true,
    });
    history.push("/profile");
  }, [
    actions.auth,
    addToast,
    birthdate,
    country?.name,
    email,
    history,
    location?.name,
    school,
  ]);

  return (
    <div className={block()}>
      <span className={block("heading")}>Редактирование профиля</span>
      {state.auth.user && (
        <div className={block("form")}>
          <Autocomplete
            options={countries}
            value={country}
            getOptionLabel={(option) => option.name}
            onChange={(_, value) => {
              setCountry(value);
              setLocation(null);
            }}
            renderInput={(params) => <TextField label="Страна" {...params} />}
          />

          <Autocomplete
            key={country?.id}
            disabled={!country}
            value={location}
            options={country ? cities[country.id] : []}
            getOptionLabel={(option) => option.name}
            onChange={(_, value) => setLocation(value)}
            renderInput={(params) => (
              <TextField label="Населенный пункт" {...params} />
            )}
          />
          <MuiPickersUtilsProvider locale={ru} utils={DateFnsUtils}>
            <KeyboardDatePicker
              // disableToolbar
              // variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Дата рождения"
              defaultValue="2000-01-01T00:00"
              value={birthdate}
              onChange={(v: any) => setBirthdate(v)}
              helperText={null}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            label="Образовательное учреждение"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          />
          <TextField
            label="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={editUser}
          >
            {loading ? "Сохранение..." : "Сохранить"}
          </Button>
        </div>
      )}
    </div>
  );
}
