import { createSlice } from "@reduxjs/toolkit";

const infoTableModel = {
  id: undefined,
  status: "",
  clients_number: undefined,
  products: [{}],
};
export const slice = createSlice({
  name: "tableInfo",
  initialState: infoTableModel,
  reducers: {
    setTableInfo(state, { payload }) {
      return {
        ...state,
        id: payload.id,
        status: payload.status,
        clients_number: payload.clients_number,
        products: payload.products,
      };
    },
  },
});
export const { setTableInfo } = slice.actions;
export default slice.reducer;
