import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHostel = createAsyncThunk(
  "get_hostel",
  async (id) => {
    try {
      const response = await axios.get(`https://localhost:7045/user/login/${id}`);
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
        throw new Error("Failed to fetch hostel");
    }
  }
); 