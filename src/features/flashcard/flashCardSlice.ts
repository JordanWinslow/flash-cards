import { createSlice } from "@reduxjs/toolkit"

const flashCards = createSlice({
  name: "flashCards",
  initialState: {
    current: 0, // index of current visible card
    flipped: false,
    cards: [
      {
        // State is an Array of Flashcards With a Front and Back. The id is the array index
        id: "0",
        front: {
          title: "Question 1",
          content: "What is Redux Toolkit?"
        },
        back: {
          title: "",
          content:
            "Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development and is intended to be the standard way to write Redux logic."
        }
      },
      {
        // State is an Array of Flashcards With a Front and Back. The id is the array index
        id: "1",
        front: { title: "Question 2", content: "Front of Flashcard" },
        back: { title: "Answer 2", content: "Back of Flashcard" }
      }
    ]
  },
  reducers: {
    nextFlashCard: state => {
      if (state.current < state.cards.length - 1) {
        if (state.flipped) flashCards.caseReducers.flipFlashCard(state) // call a caseReducer from within a caseReducer
        state.current++ // Mutative code is possible thanks to immer running under the hood
      }
    },
    prevFlashCard: state => {
      if (state.current !== 0) {
        if (state.flipped) flashCards.caseReducers.flipFlashCard(state)
        state.current--
      }
    },
    flipFlashCard: state => {
      state.flipped = !state.flipped
    },
    createFlashCard: (state, action) => {
      action.payload.id = state.cards.length + 1
      state.cards.push(action.payload) // Flux Standard Actions convention suggests we always call it payload. With RTK you have no choice.
      state.current = state.cards.length - 1 // set the new card visible immediately
    },
    updateFlashCard: (state, action) => {
      const { index, updatedCard } = action.payload
      state.cards[index] = updatedCard
    },
    deleteFlashCard: state => {
      if (state.cards.length === 1) return // If there's only one card, don't allow it to be deleted
      if (!state.flipped) flashCards.caseReducers.flipFlashCard(state) // Ensure front of card is displayed when we change cards
      if (state.cards.length - 1 === state.current) {
        // If looking at the last card, move back 1 card before deleting so we don't reference an undefined array position
        state.current--
        state.cards.splice(state.current + 1, 1)
      } else {
        state.cards.splice(state.current, 1)
      }
    }
  }
})

/* const asyncNextFlashCard = state => {
  return async dispatch => {
    if (state.current < state.cards.legnth - 1) {
      if (state.flipped) flashCards.caseReducers.flipFlashCard(state) // call a caseReducer from within a caseReducer
      setTimeout(state => state.current++, 1000) // Mutative code is possible thanks to immer running under the hood
    }
  }
} */

export const {
  nextFlashCard,
  prevFlashCard,
  flipFlashCard,
  createFlashCard,
  updateFlashCard,
  deleteFlashCard
} = flashCards.actions
export default flashCards.reducer
