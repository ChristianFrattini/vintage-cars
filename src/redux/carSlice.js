import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../utils/firebase.utils";

export const addItem = createAsyncThunk("cars/addCar", async (car) => {
  const { car_id, car_name, car_description } = car;
  const docRef = doc(db, "cars", car_id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    //if document does not exist then create one
    try {
      await setDoc(docRef, { car_id, car_name, car_description });
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
      //const id = { car_id };
      //console.log(car_id);
      const docRef = doc(db, "cars", car_id.ids);
      //console.log(docRef);
      await deleteDoc(docRef);
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchItem = createAsyncThunk("cars/fetchItem", async (id) => {
  const docRef = doc(db, "cars", id);

  //let snapshot=[]
  const snapshot = await getDoc(docRef);
  //console.log(snapshot.data());

  return snapshot.data();
});

const carSlice = createSlice({
  name: "Cars",
  initialState: {
    carsArray: [],
    carArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCarsList.fulfilled, (state, action) => {
      state.carsArray = action.payload;
    });
    builder.addCase(addItem.fulfilled, (state, action) => {
      state.carsArray.push(action.payload);
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
