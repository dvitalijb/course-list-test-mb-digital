import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCourses, handlePurchase } from "../api/courses";
import type { Course }from "../api/courses";

interface CoursesState {
  list: Course[];
  purchased: number[];
  loading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  list: [],
  purchased: [],
  loading: false,
  error: null,
};

// courses loading
export const loadCourses = createAsyncThunk("courses/load", async () => {
  return await fetchCourses();
});

// purchase of a course
export const purchaseCourse = createAsyncThunk(
  "courses/purchase",
  async (courseId: number, { rejectWithValue }) => {
    try {
      await handlePurchase(courseId);
      return courseId;
    } catch (err) {
      return rejectWithValue("Payment failed");
    }
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCourses.fulfilled, (state, action: PayloadAction<Course[]>) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(loadCourses.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load courses";
      })
      .addCase(purchaseCourse.fulfilled, (state, action: PayloadAction<number>) => {
        state.purchased.push(action.payload);
      })
      .addCase(purchaseCourse.rejected, (state, action) => {
        state.error = action.payload as string;
      });
  },
});

export default coursesSlice.reducer;
