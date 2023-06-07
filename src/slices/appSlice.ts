import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    vehicles: null as unknown as Vehicle[],
    planets: null as unknown as Planets[],
    selectedPlanets: null as unknown as Planets[],
    selectedVehicles: null as unknown as Vehicle[],
    token: ""
  },
  reducers: {
    setVehicles: (state, action) => {
      state.vehicles = [...action.payload];
    },
    setPlanets: (state, action) => {
      state.planets = [...action.payload];
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setSelectedPlanets: (state, action) => {
      state.selectedPlanets = [...action.payload];
    },
    setSelectedVehicles: (state, action) => {
      state.selectedVehicles = [...action.payload];
    }
  }
});

export const {
  setVehicles,
  setPlanets,
  setToken,
  setSelectedPlanets,
  setSelectedVehicles
} = appSlice.actions;

export const selectVehicles = (state: any) => {
  return state.vehicles;
};
export const selectPlanets = (state: any) => {
  return state.planets;
};

export default appSlice.reducer;
