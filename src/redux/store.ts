import { configureStore } from "@reduxjs/toolkit";
import tableData from "./tableData";

export default configureStore({
  reducer: {
    tableData: tableData,
  },
});