import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PhotoApi from "../../api/index";
import { InitialStateTypes } from "../../types/index.d";

export const getRandomPhoto = createAsyncThunk(
  "photo/getRandomPhoto",
  async () => {
    const response = await PhotoApi.GetRandomPhoto();
    return response.data;
  }
);

export const getUsersLikedPhotos = createAsyncThunk(
  "photo/getUsersLikedPhotos",
  async () => {
    const response = await PhotoApi.GetUsersLikedPhots();
    return response.data;
  }
);

export const likePhoto = createAsyncThunk(
  "photo/likePhoto",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await PhotoApi.LikePhoto(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const unLikePhoto = createAsyncThunk(
  "photo/unlikePhoto",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await PhotoApi.UnlikePhoto(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  randomPhoto: {
    id: "",
    urls: {
      regular: "",
      thumb: "",
    },
  },
  likedPhotos: [],
  loading: false,
  error: "",
} as InitialStateTypes;

const photoSlice = createSlice({
  name: "randomPhoto",
  initialState,
  reducers: {
    addRandomPhoto: (state, action) => {
      state.randomPhoto = action.payload;
    },
    addLikedPhotos: (state, action) => {
      state.likedPhotos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRandomPhoto.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRandomPhoto.fulfilled, (state, action) => {
      state.loading = false;
      state.randomPhoto = action.payload;
    });
    builder.addCase(getRandomPhoto.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getUsersLikedPhotos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsersLikedPhotos.fulfilled, (state, action) => {
      state.loading = false;
      state.likedPhotos = action.payload;
    });
    builder.addCase(getUsersLikedPhotos.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addRandomPhoto, addLikedPhotos } = photoSlice.actions;

export default photoSlice.reducer;
