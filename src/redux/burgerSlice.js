import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

const initialState = {
    cartItems: [],// Liste des articles dans le panier
    cartCount: 0,// Nombre total d'articles dans le panier
};

const burgerSlice = createSlice({
    name: "burgers",
    initialState,
    reducers: {
        addToCart(state, action) {
            // Ajouter l'article au panier et incrémenter le cartCount
            state.cartItems.push(action.payload);
            state.cartCount += action.payload.quantity;
        },
        removeFromCart(state, action) {
            // Supprimer l'article du panier et décrémenter le cartCount
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartCount -= state.cartItems[itemIndex].quantity;
                state.cartItems.splice(itemIndex, 1);
            }
        },
        updateBurger(state, action) {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                state.cartCount += action.payload.quantity - item.quantity;
                item.quantity = action.payload.quantity;
            }
        }
    }
});


export const { addToCart, removeFromCart, updateCartItemCount } = burgerSlice.actions;

export default burgerSlice.reducer;