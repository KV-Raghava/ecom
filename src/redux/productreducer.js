
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// const { createSlice } = require("@reduxjs/toolkit");
const initialState={
    products:[
        {
            "id": 10,
            "title": "High-Performance Graphics Card",
            "description": "Graphics card with advanced GPU architecture for smooth gaming and content creation.",
            "price": 499,
            "discountPercentage": 10,
            "rating": 4.8,
            "stock": 15,
            "brand": "PowerGraph",
            "category": "technology",
            "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpg"
          }
    ],
    cartItems: [],
    isSorted: false
}
const apiEndpoint = "https://my-json-server.typicode.com/kv-raghava/ecommerceDB/products";
// Creating Reducer using Redux Toolkit
export const fetchproducts = createAsyncThunk('product/fetchproducts', async () => {
    try {
      console.log("inside fetchproducts");
      const response = await axios.get(apiEndpoint);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  });
const productslice = createSlice({
    name:'product',
    initialState:initialState,
    reducers:{
        // this is add action
        addProduct:(state, action)=>{
                state.products.push(action.payload);
        },
          editProduct:(state, action)=>{
            const { id, newValues } = action.payload;
            console.log(action.payload);
            //find prouct by Id and edit 
            const indexOfProduct = state.products.findIndex(ele => ele.id === id);

            // Check if the product with the given id was found
            if (indexOfProduct !== -1) {
              // Update the properties of the product
              state.products[indexOfProduct] = {
                ...state.products[indexOfProduct],
                title: newValues.title,
                price: newValues.price,
                rating: newValues.rating,
                description: newValues.description
              }
            }
          },

          deleteProduct:(state, action)=>{
            const { id } = action.payload;
            const indexOfProduct = state.products.findIndex(ele => ele.id === id);
            if (indexOfProduct !== -1) {
              state.products.splice(indexOfProduct, 1);
            }
          },

          addToCart:(state, action) => {
            const {id} = action.payload;
            state.cartItems.push(id);
            console.log(`cartItems:${state.cartItems}`);
          },

          deleteFromCart: (state, action) => {
            const { id } = action.payload;
            const indexToRemove = state.cartItems.indexOf(id);

            if (indexToRemove !== -1) {
              // If the element is found in the array
              state.cartItems.splice(indexToRemove, 1); 
            }
      },
          toggleIsSorted:(state,action)=>{
            console.log("toggle is sorted");
            state.isSorted = !state.isSorted;
            console.log(state.isSorted);
          }
    },
    extraReducers: (builder) => {
        builder
          // Pending state when the request is in progress
          .addCase(fetchproducts.pending, (state) => {
            state.status = 'loading';
          })
          // Fulfilled state when the request is successful
          .addCase(fetchproducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
          })
          // Rejected state when the request fails
          .addCase(fetchproducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
});

export const productReducer=productslice.reducer;

export const actions = productslice.actions;

// selector
export const productselector = (state)=>state.productReducer.products;
export const cartSelector = (state)=>state.productReducer.cartItems;
export const sortSelector = (state) => state.productReducer.isSorted;


