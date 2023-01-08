import { createSlice } from "@reduxjs/toolkit";

const infoTableModel = {
  data:[{}]
}
export const slice = createSlice({
  name: "tablesData",
  initialState: infoTableModel,
  reducers: {
    setTablesData(state, { payload }) {
      
      return {
        
        ...state,
        data:payload.tables
      };
    },
  },
});
export const { setTablesData } = slice.actions;
export default slice.reducer;