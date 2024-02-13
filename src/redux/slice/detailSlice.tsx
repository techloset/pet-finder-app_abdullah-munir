import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPetFinderInstance } from "../../utilities/axios/FetchApi";
import { PetDetail } from "../../constants/Types";




export interface DetailState {
  petDetail: PetDetail | null;
  loading: boolean;
  error: string | null;
}

const initialState: DetailState = {
  petDetail: null,
  loading: false,
  error: "",
};

export const getPetDetails = createAsyncThunk(
  "getPetDetails",
  async (Id: string) => {
    try {
      const petFinderInstance = await createPetFinderInstance();
      const resp = await petFinderInstance.get(`/animals/${Id}`);
      const data = resp.data.animal;
      return data as PetDetail;
    } catch (error) {
      throw new Error("Error Fetching Data") as Error;
    }
  }
);

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPetDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPetDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.petDetail = action.payload;
      })
      .addCase(getPetDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.petDetail = null;
      });
  },
});

export default detailSlice.reducer;
