import { withNaming } from "@bem-react/classname";
const cn = withNaming({ n: "", e: "__", m: "_", v: "_" });
const b = cn("request-status");

export const columns = [
  {
    title: "Компания",
    dataIndex: "company"
  },
  {
    title: "Клиент",
    dataIndex: "client"
  },
  {
    title: "ИНН",
    dataIndex: "INN"
  },
  {
    title: "Создано",
    dataIndex: "dateCreated"
  },
  {
    title: "Телефон",
    dataIndex: "phone"
  },
  {
    title: "Статус",
    dataIndex: "status"
  },
  {
    title: "Управление",
    dataIndex: "administration"
  }
];
