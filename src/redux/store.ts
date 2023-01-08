import { configureStore } from "@reduxjs/toolkit";
import setTableInfo from "./tableSelectedData";
import tablesData from './allTableData'
export default configureStore({
  reducer: {
    setTableInfo: setTableInfo,
    tablesData:tablesData
  },
});