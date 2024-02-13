import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CountryData {
  name: {
    common: string;
    official: string;
  };
}

const CountryFetcherApi = createSlice({
  name: "AuthenticateSignup",
  initialState: {
    listOfCountries: [] ,
    loading: false,
    error: null as string | null, // Add error state
  },
  reducers: {
    onGetFormDataInputStart: state => {
      state.loading = true;
      state.error = null; // Clear any previous errors
    },
    onGetFormDataInputSuccess: (
      state :any,
    action:any
    ) => {
      state.loading = false;
      state.listOfCountries = action.payload;
    },
    onGetFormDataInputFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = CountryFetcherApi;

export const fetchCountries = () => async (dispatch: any) => {
  dispatch(actions.onGetFormDataInputStart());

  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const jsonData = await response.json();
    dispatch(actions.onGetFormDataInputSuccess(jsonData));
  } catch (error: any) {
    dispatch(actions.onGetFormDataInputFailure(error.message));
  }
};

export default CountryFetcherApi;
