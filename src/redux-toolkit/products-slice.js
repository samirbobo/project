import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
  "productsSlice/getProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    items: [],
    loading: false, // حالة التحميل
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true; // بدأ التحميل
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false; // انتهى التحميل
        state.items = action.payload; // تخزين البيانات
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false; // انتهى التحميل مع خطأ
      });
  },
});

// eslint-disable-next-line no-empty-pattern
export const {} = productsSlice.actions;
export default productsSlice.reducer;
