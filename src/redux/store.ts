import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import flashCardsReducer from "../features/flashcard/flashCardSlice"

const store = configureStore({
  reducer: {
    flashCards: flashCardsReducer
    /*favoriteCards: favoriteCardsSlice*/
  },
  middleware: getDefaultMiddleware(), // this is redundant and for demonstration only
  devTools: true // this is redundant and for demonstration only
  //preloadedState: {your state object for initialization or rehydration}
})

export default store
export type RootState = ReturnType<typeof store.getState>
