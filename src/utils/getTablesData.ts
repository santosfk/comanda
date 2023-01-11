import { useState } from "react";
import { useSelector } from "react-redux";
import { useInitialData } from "./setInitialData";

export const useTablesData = () => {
  // const [tablesData, setTablesData] = useState();

  const { data } = useSelector((state: any) => state.tablesData);
  return { data };
};
