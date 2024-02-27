import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createPetFinderInstance } from "../../utilities/axios/FetchApi";
import { OrganizationData } from "../../constants/Types";

interface ApiState {
  organizationData: OrganizationData[] | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: ApiState = {
  organizationData: null, // Update to null instead of empty array
  status: "idle",
  error: null,
};

export const fetchOrganizationData = createAsyncThunk(
  "fetchOrganizationData",
  async (organization_id: string) => {
    try {
      const petFinderInstance = await createPetFinderInstance();
      const response = await petFinderInstance.get(
        `/animals?organization=${organization_id}`
      );
      const organizationData = response.data.animals;
      return organizationData;
    } catch (error) {
      throw new Error("Failed to fetch organization data");
    }
  }
);

const organizationSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganizationData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchOrganizationData.fulfilled,
        (state, action: PayloadAction<OrganizationData[]>) => {
          state.status = "succeeded";
          state.organizationData = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchOrganizationData.rejected, (state) => {
        state.status = "failed";
        state.error = "Failed to fetch organization data";
      });
  },
});

export default organizationSlice.reducer;
