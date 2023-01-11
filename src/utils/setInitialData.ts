import { useDispatch } from "react-redux";
import { setTablesData } from "../redux/allTableData";
import table from "../mocks/table.json";
import { useEffect } from "react";
export const useInitialData = () => {
  const tableData = table;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTablesData(tableData));
  },[]);
};
