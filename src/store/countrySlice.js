import { createSlice } from "@reduxjs/toolkit";
import { getTour } from "./asyncThunk/getTour";

const initialState = {
  isLoading: false,
  error: "",
  countries: [
    {
      id: "1",
      tourID: "1",
      img: "https://www.erv.ru/upload/medialibrary/a72/ce2nwnx8gnfy1mswly6wjnron1tsatcm/%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D0%98%D0%BD%D0%B4%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5%20%D0%B2%20%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B8.jpg",
      name: "Мумбаи",
      descraption:
        "Исследуйте коммерческую столицу Индии, Мумбаи, с ее многочисленными представителями индийского кинематографа в городе.",
      oldPrice: "120000",
      newPrice: "50000",
      status: 'actual'
    },
    {
      id: "2",
      tourID: "2",
      img: "https://www.erv.ru/upload/medialibrary/a72/ce2nwnx8gnfy1mswly6wjnron1tsatcm/%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D0%98%D0%BD%D0%B4%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5%20%D0%B2%20%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B8.jpg",
      name: "Марроко",
      descraption:
        "Исследуйте коммерческую столицу Индии, Мумбаи, с ее многочисленными представителями индийского кинематографа в городе.",
      oldPrice: "220000",
      newPrice: "150000",
      status: 'actual'
    },
    {
      id: "3",
      tourID: "3",
      img: "https://www.erv.ru/upload/medialibrary/a72/ce2nwnx8gnfy1mswly6wjnron1tsatcm/%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D0%98%D0%BD%D0%B4%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5%20%D0%B2%20%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B8.jpg",
      name: "Дубай",
      descraption:
        "Исследуйте коммерческую столицу Индии, Мумбаи, с ее многочисленными представителями индийского кинематографа в городе.",
      oldPrice: "150000",
      newPrice: "60000",
      status: 'noactual'
    },
    {
      "id": "4",
      tourID: "4",
      "img": "https://www.erv.ru/upload/medialibrary/a72/ce2nwnx8gnfy1mswly6wjnron1tsatcm/%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D0%98%D0%BD%D0%B4%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5%20%D0%B2%20%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B8.jpg",
      "name": "Париж",
      "descraption": "Город любви, искусства и красоты, Париж, с его знаменитыми достопримечательностями и уютными улочками, ждет вас!",
      "oldPrice": "180000",
      "newPrice": "100000",
      "status": "noactual"
    },
    {
      "id": "5",
      tourID: "5",
      "img": "https://www.erv.ru/upload/medialibrary/a72/ce2nwnx8gnfy1mswly6wjnron1tsatcm/%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D0%98%D0%BD%D0%B4%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5%20%D0%B2%20%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B8.jpg",
      "name": "Бали",
      "descraption": "Остров Бали в Индонезии славится своими пляжами, роскошными отелями, культурными достопримечательностями и великолепным кулинарным опытом.",
      "oldPrice": "200000",
      "newPrice": "120000",
      "status": "noactual"
    },
    {
      "id": "7",
      tourID: "6",
      "img": "https://www.erv.ru/upload/medialibrary/a72/ce2nwnx8gnfy1mswly6wjnron1tsatcm/%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D0%98%D0%BD%D0%B4%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5%20%D0%B2%20%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B8.jpg",
      "name": "Токио",
      "descraption": "Погрузитесь в волнующий мир японской культуры и современных технологий в Токио, одном из самых динамичных городов мира.",
      "oldPrice": "250000",
      "newPrice": "180000",
      "status": "actual"
    },
    {
      "id": "8",
      "img": "https://www.erv.ru/upload/medialibrary/a72/ce2nwnx8gnfy1mswly6wjnron1tsatcm/%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D0%98%D0%BD%D0%B4%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5%20%D0%B2%20%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B8.jpg",
      "name": "Лондон",
      "descraption": "Очаруйтесь старинными зданиями, культурными достопримечательностями и разнообразной кухней в столице Великобритании, Лондоне.",
      "oldPrice": "230000",
      "newPrice": "150000",
      "status": "noactual"
    },
    {
      "id": "9",
      "img": "https://www.erv.ru/upload/medialibrary/a72/ce2nwnx8gnfy1mswly6wjnron1tsatcm/%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D0%98%D0%BD%D0%B4%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5%20%D0%B2%20%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B8.jpg",
      "name": "Рио-де-Жанейро",
      "descraption": "Почувствуйте атмосферу праздника и веселья в Рио-де-Жанейро, где встречаются бразильские традиции и современная культура.",
      "oldPrice": "270000",
      "newPrice": "190000",
      "status": "noactual"
    },
    {
      "id": "10",
      tourID: "10",
      "img": "https://www.erv.ru/upload/medialibrary/a72/ce2nwnx8gnfy1mswly6wjnron1tsatcm/%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D0%98%D0%BD%D0%B4%D0%B8%D0%B8%20%D0%BD%D0%B0%20%D0%B7%D0%B0%D0%BA%D0%B0%D1%82%D0%B5%20%D0%B2%20%D0%9C%D1%83%D0%BC%D0%B1%D0%B0%D0%B8.jpg",
      "name": "Сейшельские острова",
      "descraption": "Отправьтесь в роскошный рай на Сейшельских островах, где вас ждут белоснежные пляжи, теплый океан и изысканная кухня.",
      "oldPrice": "320000",
      "newPrice": "220000",
      "status": "actual"
    }
    
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
    extraReducers: (builder) => {
      builder
        .addCase(getTour.pending, (state, action) => {
          state.error = undefined;
          state.isLoading = true;
        })
        .addCase(getTour.fulfilled, (state, action) => {
          state.isLoading = false;
          state.countries = action.payload;
        })
        .addCase(getTour.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
});

export const { actions: countriesActions } = countrySlice;
export const { reducer: countriesReducer } = countrySlice;
