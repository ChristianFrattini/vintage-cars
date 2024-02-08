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
import { ref, uploadBytes } from "firebase/storage";

export const addItem = createAsyncThunk("cars/addCar", async (car) => {
  const { car_id, car_name, car_description } = car;

  const docRef = doc(db, "cars", car_id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    //if document does not exist then create one
    try {
      await setDoc(docRef, { car_id, car_name, car_description });
      /*const frontImageRef = ref(
        //image doc ref
        storage,
        `CarImages/${car_id}/${car_id}-${car_image.name}`,
      );
      await uploadBytes(frontImageRef, car_image).then(() => {}); */
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

  const snapshot = await getDoc(docRef);

  return snapshot.data();
});

export const addFrontImage = createAsyncThunk(
  "cars/uploadFrontImage",
  async (image) => {
    const { car_image, car_id } = image;
    console.log(car_id);
    const frontImageRef = ref(
      storage,
      `CarImages/${car_id}/${car_id}-${car_image.name}`,
    );
    await uploadBytes(frontImageRef, car_image).then(() => {});
  },
);

const carSlice = createSlice({
  name: "Cars",
  initialState: {
    carsArray: [],
    carArray: [],
    frontImage: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCarsList.fulfilled, (state, action) => {
      state.carsArray = action.payload;
    });
    builder.addCase(addItem.fulfilled, (state, action) => {
      const { car_id, car_name, car_description } = action.payload;
      state.carsArray.push({ car_id, car_name, car_description });
    });
    builder.addCase(deleteItem.fulfilled, (state, action) => {
      state.carsArray.filter((car) => car.car_id !== action.payload);
    });
    builder.addCase(fetchItem.fulfilled, (state, action) => {
      state.carArray = action.payload;
    });
    builder.addCase(addFrontImage.fulfilled, (state, action) => {
      state.frontImage = action.payload;
    });
  },
});

export default carSlice.reducer;
