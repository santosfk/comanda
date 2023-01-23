import axios from "axios";
import { Table } from "../models/Table";
const url = "https://63c969a9904f040a965dadf7.mockapi.io/";
const getTables = async (): Promise<Table[]> => {
  const response = await axios.get<Table[]>(`${url}comanda`);

  return response.data;
};
const setNewTable = (table: Table) => {
  axios.post(`${url}comanda`, table);
};
const DeleteTable = async (id: Number) => {
  axios.delete(`${url}comanda/${id}`);
};
export { getTables, DeleteTable, setNewTable };
