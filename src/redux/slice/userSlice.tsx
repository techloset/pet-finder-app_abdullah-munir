import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPetFinderInstance } from "../../utilities/axios/fetchApi";

export type CounterState = {
  pet: [] | null;
  loading: boolean;
  error: string | null;
};

const initialState: CounterState = {
  pet: [],
  loading: false,
  error: "",
};

export const getPetData = createAsyncThunk("petData", async () => {
  try {
    const petFinderInstance = await createPetFinderInstance();
    const response = await petFinderInstance.get("/animals");
    return response.data.animals;
  } catch (error) {
    throw new Error("error while getting the data");
  }
});

export const petData = createSlice({
  name: "petData",
  initialState,
  reducers: {},
  extraReducers(buider) {
    buider
      .addCase(getPetData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPetData.fulfilled, (state, action) => {
        (state.loading = false), (state.error = null);
        state.pet = action.payload;
      })
      .addCase(getPetData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.pet = null;
      });
  },
});

export default petData.reducer;
