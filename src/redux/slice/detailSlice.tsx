import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createPetFinderInstance } from "../../utilities/axios/fetchApi";

// import fetchDataUsingToken from '../../utilities/axios/updateToken';

export interface PetDetail {
  name: string;
  photos: {
    small: string;
    medium: string;
    large: string;
    full: string;
  }[];
  age: string;
  id: number;
  gender: string;
  description: string;
  contact: {
    email: string;
    phone: number;
    address: {
      address: string;
      city: string;
      country: string;
      postcode: number;
      status: string;
    };
  };
  status: string;
  species: string;
  size: string;
  type: string;
  colors: {
    primary: string | null;
    secondary: string | null;
    tertiary: string | null;
  };
  coat: string;
  breeds: {
    mixed: boolean;
    primary: string;
    secondary: string;
    unknown: boolean;
  };
  organization_id: string;
  url: string;
}

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
