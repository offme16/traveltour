import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../http/api";

export const getHostel = createAsyncThunk(
  "get_hostel",
  async (id) => {
    try {
      const response = await axios.post(`${API_URL}HotelInfo`, {
        HostelId: id
      });
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
        throw new Error("Failed to fetch hostel");
    }
  }
); 