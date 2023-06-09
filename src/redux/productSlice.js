import {createSlice} from "@reduxjs/toolkit";

export  const productSlice= createSlice({
    name:'products',
    initialState:{
        items:[
            {
                id:"1",
                title:"Hamburger",
                price: 2,
                image:"./big-mac.jpg",
                count:0
                   
            },
            {
                id:"2",
                title:"Flip Flops",
                price: 3,
                image:"./flip-flops.jpg",
                count:0     
            },
            {
                id:"3",
                title:"Coca-Cola Pack",
                price: 5,
                image:"./coca-cola-pack.jpg",
                count:0      
            },
            {
                id:"4",
                title:"Single Family Home",
                price: 300000,
                image:"./single-family-home.jpg",
                count:0      
            },
            {
                id:"5",
                title:"McDonalds Franchise",
                price: 1500000,
                image:"./mcdonalds-franchise.jpg",
                count:0      
            },
            {
                id:"6",
                title:"Make a Movie",
                price: 100000000,
                image:"./make-a-movie.jpg",
                count:0      
            },
            {
                id:"7",
                title:"Skyscraper",
                price: 850000000,
                image:"./skyscraper.jpg",
                count:0      
            },
            {
                id:"8",
                title:"Cruise Ship",
                price: 930000000,
                image:"./cruise-ship.jpg",
                count:0      
            },
            {
                id:"9",
                title:"NBA Team",
                price: 2120000000,
                image:"./nba-team.jpg",
                count:0      
            },
            
        ],
        status:'idle',
        total:100000000000,
        money:100000000000,
    },
    reducers:{
        addToBasket: (state, action) => {
            const existingItem = state.items.find((product) => product.id === action.payload.id);
            if (existingItem) {
              existingItem.count++;
            } else {
              state.items = [...state.items, { ...action.payload, count: 0 }];
            }
            state.total =
              state.money - state.items.reduce((acc, item) => acc + item.price * item.count, 0);
          },
          deleteToBasket: (state, action) => {
            const existingItem = state.items.find((product) => product.id === action.payload.id);
            if (existingItem) {
              if(existingItem.count > 0) existingItem.count--;
            }
            state.total =
              state.money - state.items.reduce((acc, item) => acc + item.price * item.count, 0);
          },
    },
    extraReducers:{
       
    }

});
export const { addToBasket,deleteToBasket } = productSlice.actions;
export default productSlice.reducer;