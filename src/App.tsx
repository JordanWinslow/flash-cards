import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Route } from "react-router-dom"

import {
  nextFlashCard,
  prevFlashCard
} from "./features/flashcard/flashCardSlice"

import BottomNav from "./components/BottomNav"
import FlashCard from "./features/flashcard/FlashCard"
import CreateFlashCard from "./features/flashcard/CreateFlashCard"

import { Grid } from "@material-ui/core"
import { Center } from "./components/Center"

/**********************APPLICATION**********************/
const App: React.FC = () => {
  const dispatch = useDispatch()
  const { current, cards } = useSelector((state: any) => state.flashCards)

  return (
    <>
      <Route exact path="/">
        <Center>
          <Grid item xs={10} sm={8} md={6} xl={4}>
            <FlashCard
              id={current}
              front={cards[current].front}
              back={cards[current].back}
            />
          </Grid>
        </Center>
        <BottomNav
          nextCard={() => dispatch(nextFlashCard())}
          prevCard={() => dispatch(prevFlashCard())}
        />
      </Route>
      <Route path="/create-new-flashcard">
        <CreateFlashCard />
        <BottomNav />
      </Route>
    </>
  )
}

export default App
