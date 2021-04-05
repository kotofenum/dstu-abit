import { Button } from "@material-ui/core";
import MaterialTable from "@material-table/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";
import { Users_users } from "../../store/admin/effects/gql/graphql-types/Users";
import { user } from "../../store/admin/effects/gql/queries";
import { AccountType } from "../../store/graphql-global-types";

import "./styles.scss";

const block = cn("admin-users-page");

export function AdminUsersPage() {
  const { state, actions } = useOvermind();
  const [data, setData] = useState<null | any[]>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    actions.admin.getUsers();

    setData(
      state.admin.users.map((user) => ({
        uid: user.uid,
        firstName: user.firstName,
        lastName: user.lastName,
        patronym: user.patronym,
        type: user.type,
        phone: user.phone,
        email: user.email,
        birthDate: user.birthDate ? moment(user.birthDate).format("DD.MM.YYYY") : "",
        country: user.country,
        locality: user.locality,
        school: user.school,
        course: user.course,
        child: user.child,
        position: user.position,
      }))
    );
  }, [actions.admin, state.admin.users]);

  return (
    <div className={block()}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <span className={block("heading")}>Список пользователей платформы</span>
      {/* <div className={block("actions")}>
        {state.auth.isAdmin ? (
          <Link
            to="/competitions/add"
            style={{
              alignSelf: "flex-end",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button variant="outlined" color="primary">
              Создать событие
            </Button>
          </Link>
        ) : null}
      </div> */}
      {/* <div className={block("list")}>
        {state.admin.users.map((user) => (
          <div className={block("list-item")}>
            {user.lastName} {user.firstName} {user.patronym}
          </div>
        ))}
      </div> */}
      {data?.length && (
        <div style={{ maxWidth: "100%" }}>
          <MaterialTable
            columns={[
              {
                title: "Тип",
                field: "type",
                render: (rowData) => (
                  <span
                    className={block("user-type", { [rowData.type]: true })}
                  >
                    {rowData.type === AccountType.enrolee && <>Абитуриент</>}
                    {rowData.type === AccountType.parent && <>Родитель</>}
                    {rowData.type === AccountType.teacher && <>Педагог</>}
                  </span>
                ),
              },
              { title: "Фамилия", field: "firstName" },
              { title: "Имя", field: "lastName" },
              { title: "Отчество", field: "patronym" },
              { title: "Телефон", field: "phone" },
              { title: "E-mail", field: "email" },
              { title: "Дата рождения", field: "birthDate" },
              { title: "Страна", field: "country" },
              { title: "Нас. пункт", field: "locality" },
              { title: "Обр. учреждение", field: "school" },
              { title: "Курс", field: "course" },
              { title: "Ребенок", field: "child" },
              { title: "Должность", field: "position" },
              // { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
              // {
              //   title: "Doğum Yeri",
              //   field: "birthCity",
              //   lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
              // },
            ]}
            options={{
              sorting: true,
              thirdSortClick: false,
              pageSize: data?.length,
              paging: false
            }}
            localization={{
              toolbar: {
                searchPlaceholder: "Поиск",
              },
            }}
            data={data!}
            // page={currentPage}
            // onChangePage={(page) => setCurrentPage(page)}
            onRowClick={(_, row) => console.log(row)}
            title=""
          />
        </div>
      )}
    </div>
  );
}
