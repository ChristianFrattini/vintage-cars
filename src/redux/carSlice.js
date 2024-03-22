import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db, storage } from "../utils/firebase.utils";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const addItem = createAsyncThunk("cars/addCar", async (car) => {
  const { car_id, car_name, car_description, imageURL, imagesURL } = car;

  const docRef = doc(db, "cars", car_id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    //if document does not exist then create one
    try {
      await setDoc(docRef, {
        car_id,
        car_name,
        car_description,
        imageURL,
        imagesURL,
      });
    } catch (error) {
      console.log("error creating the ", error.message);
      alert("Error during submission. Please try again");
    }
  } else {
    console.log("Document data: existing");
    return;
  }
  return car;
});

export const fetchCarsList = createAsyncThunk(
  "cars/fetchCarsList",
  async () => {
    const snapshot = await getDocs(collection(db, "cars"));
    let cars = [];
    snapshot.docs.forEach((doc) => {
      cars.push({ ...doc.data(), id: doc.id });
    });

    return cars;
  },
);

export const deleteItem = createAsyncThunk(
  "cars/deleteItem",
  async (car_id) => {
    try {
      const docRef = doc(db, "cars", car_id.ids);

      await deleteDoc(docRef);
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchItem = createAsyncThunk("cars/fetchItem", async (id) => {
  const docRef = doc(db, "cars", id);

  const snapshot = await getDoc(docRef);

  return snapshot.data();
});

const carSlice = createSlice({
  name: "Cars",
  initialState: {
    carsArray: [],
    carArray: [],
    imageURL: null,
    imagesURL: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCarsList.fulfilled, (state, action) => {
      state.carsArray = action.payload;
    });
    builder.addCase(addItem.fulfilled, (state, action) => {
      const { car_id, car_name, car_description, imageURL, imagesURL } =
        action.payload;
      state.carsArray.push({
        car_id,
        car_name,
        car_description,
        imageURL,
        imagesURL,
      });
    });
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      state.carsArray.filter((car) => car.car_id !== action.payload);
    });
    builder.addCase(fetchItem.fulfilled, (state, action) => {
      state.carArray = action.payload;
    });
  },
});

export default carSlice.reducer;
