import { createSlice } from "@reduxjs/toolkit"

interface CardSideState {
  /*Title to be displayed on front of flash card in header*/
  title: string
  /*Content such as a question, a word to be defined, etc.*/
  content: string
}

export interface CardState {
  id: number
  front: CardSideState
  back: CardSideState
}

interface SliceState {
  current: number
  flipped: boolean
  cards: CardState[]
};

const flashCards = createSlice({
  name: "flashCards",
  initialState: {
    current: 0, // index of current visible card
    flipped: false,
    cards: [
      {
        // State is an Array of Flashcards With a Front and Back. The id is the array index
        id: 0,
        front: {
          title: "Question 1",
          content: "What is Redux Toolkit? (click anywhere on the card to flip)"
        },
        back: {
          title: "",
          content:
            "Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development and is intended to be the standard way to write Redux logic."
        }
      },
      {
        // State is an Array of Flashcards With a Front and Back. The id is the array index
        id: 1,
        front: {
          title: "About This Project",
          content:
            "This project was built with React, React-Router, Redux, Redux Toolkit, React-Redux & a Custom Designed MaterialUI Theme"
        },
        back: {
          title: "More info",
          content:
            "Click the GitHub icon in the top right of the screen to view the source code!"
        }
      }
    ]
  } as SliceState,
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
    // See if you can implement this somewhere in the program by adding an edit button to each card!
    updateFlashCard: (state, action) => {
      const { index, updatedCardInfo } = action.payload
      state.cards[index] = updatedCardInfo
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
