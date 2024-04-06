import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
//import { registUser } from "./asyncThunk/registUser";

const initialState = {
  isLoading: false,
  error: "",
  countries: [
    {
      id: "1",
      img: "https://www.erv.ru/upload/medialibrary/a72/ce2nwnx8gnfy1mswly6wjnron1tsatcm/%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D0%98%D0%BD%D0%B4%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5%20%D0%B2%20%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B8.jpg",
      name: "Мумбаи",
      descraption:
        "Исследуйте коммерческую столицу Индии, Мумбаи, с ее многочисленными представителями индийского кинематографа в городе.",
      oldPrice: "120000",
      newPrice: "50000",
    },
    {
      id: "2",
      img: "https://www.erv.ru/upload/medialibrary/a72/ce2nwnx8gnfy1mswly6wjnron1tsatcm/%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D0%98%D0%BD%D0%B4%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5%20%D0%B2%20%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B8.jpg",
      name: "Марроко",
      descraption:
        "Исследуйте коммерческую столицу Индии, Мумбаи, с ее многочисленными представителями индийского кинематографа в городе.",
      oldPrice: "220000",
      newPrice: "150000",
    },
    {
      id: "3",
      img: "https://www.erv.ru/upload/medialibrary/a72/ce2nwnx8gnfy1mswly6wjnron1tsatcm/%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D0%98%D0%BD%D0%B4%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5%20%D0%B2%20%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B8.jpg",
      name: "Дубай",
      descraption:
        "Исследуйте коммерческую столицу Индии, Мумбаи, с ее многочисленными представителями индийского кинематографа в городе.",
      oldPrice: "150000",
      newPrice: "60000",
    },
  ],
};
export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setField: (state, action) => {
      state.countries = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(registUser.pending, (state, action) => {
  //         state.error = undefined;
  //         state.isLoading = true;
  //       })
  //       .addCase(registUser.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //       })
  //       .addCase(registUser.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       });
  //   },
});

export const { actions: countriesActions } = countrySlice;
export const { reducer: countriesReducer } = countrySlice;
