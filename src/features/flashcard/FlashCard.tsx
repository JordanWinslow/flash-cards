import React from "react"
import Flip from "react-card-flip"
import { useDispatch, useSelector } from "react-redux"

import { flipFlashCard, deleteFlashCard } from "./flashCardSlice"

import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

/* const styles = {
  card: {
    background:
      "linear-gradient(45deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 50%,rgba(169, 169, 169,0.04) 50%, rgba(169, 169, 169,0.04) 71%,rgba(251, 251, 251,0.04) 71%, rgba(251, 251, 251,0.04) 100%), linear-gradient(45deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 56%,rgba(169, 169, 169,0.04) 56%, rgba(169, 169, 169,0.04) 67%,rgba(251, 251, 251,0.04) 67%, rgba(251, 251, 251,0.04) 100%), linear-gradient(135deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 4%,rgba(169, 169, 169,0.04) 4%, rgba(169, 169, 169,0.04) 75%,rgba(251, 251, 251,0.04) 75%, rgba(251, 251, 251,0.04) 100%), linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))",
    color: "#EEEEEE",
    boxShadow: "0 4px 20px rgba(0,0,0, 0.5)",
    minHeight: "45vh",
    header: {
      background:
        "radial-gradient(circle at 17% 1%, rgba(198, 198, 198,0.03) 0%, rgba(198, 198, 198,0.03) 50%,rgba(42, 42, 42,0.03) 50%, rgba(42, 42, 42,0.03) 100%),radial-gradient(circle at 8% 81%, rgba(253, 253, 253,0.03) 0%, rgba(253, 253, 253,0.03) 50%,rgba(36, 36, 36,0.03) 50%, rgba(36, 36, 36,0.03) 100%),radial-gradient(circle at 83% 29%, rgba(164, 164, 164,0.03) 0%, rgba(164, 164, 164,0.03) 50%,rgba(60, 60, 60,0.03) 50%, rgba(60, 60, 60,0.03) 100%),radial-gradient(circle at 96% 62%, rgba(170, 170, 170,0.03) 0%, rgba(170, 170, 170,0.03) 50%,rgba(169, 169, 169,0.03) 50%, rgba(169, 169, 169,0.03) 100%),linear-gradient(338deg, rgb(2, 141, 213),rgb(5, 172, 81))"
    }
  }
} */

const useStyles = makeStyles({
  root: {
    /*
    MATERIAL UI OFFICIAL METHOD FOR WRITING CSS OVERRIDES:

    this is why it's often better to just create your own components if you want to 
    make your own design, rather than editing a design framework like MaterialUI. 
    Overrides are not nearly as trivial as they should be and by the time you master
    their naming conventions you could have already made your own design system!
    */
    //HEADER CONTENT OF FLASHCARD
    "& .MuiCardHeader-root": {
      color: "#EEEEEE",
      background:
        "radial-gradient(circle at 17% 1%, rgba(198, 198, 198,0.03) 0%, rgba(198, 198, 198,0.03) 50%,rgba(42, 42, 42,0.03) 50%, rgba(42, 42, 42,0.03) 100%),radial-gradient(circle at 8% 81%, rgba(253, 253, 253,0.03) 0%, rgba(253, 253, 253,0.03) 50%,rgba(36, 36, 36,0.03) 50%, rgba(36, 36, 36,0.03) 100%),radial-gradient(circle at 83% 29%, rgba(164, 164, 164,0.03) 0%, rgba(164, 164, 164,0.03) 50%,rgba(60, 60, 60,0.03) 50%, rgba(60, 60, 60,0.03) 100%),radial-gradient(circle at 96% 62%, rgba(170, 170, 170,0.03) 0%, rgba(170, 170, 170,0.03) 50%,rgba(169, 169, 169,0.03) 50%, rgba(169, 169, 169,0.03) 100%),linear-gradient(338deg, rgb(2, 141, 213),rgb(5, 172, 81))"
    }, //BOTTOM CONTENT OF FLASHCARD
    "& .MuiCardContent-root": {
      background:
        "linear-gradient(45deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 50%,rgba(169, 169, 169,0.04) 50%, rgba(169, 169, 169,0.04) 71%,rgba(251, 251, 251,0.04) 71%, rgba(251, 251, 251,0.04) 100%), linear-gradient(45deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 56%,rgba(169, 169, 169,0.04) 56%, rgba(169, 169, 169,0.04) 67%,rgba(251, 251, 251,0.04) 67%, rgba(251, 251, 251,0.04) 100%), linear-gradient(135deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 4%,rgba(169, 169, 169,0.04) 4%, rgba(169, 169, 169,0.04) 75%,rgba(251, 251, 251,0.04) 75%, rgba(251, 251, 251,0.04) 100%), linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))",
      color: "#EEEEEE",
      minHeight: "25vh"
    }, //TRASHCAN ICON COLOR
    "& .MuiButtonBase-root": {
      color: "white"
    }, //TRASHCAN ICON ALIGNMENT
    "& .MuiCardHeader-action": {
      alignSelf: "auto",
      marginTop: 0,
      marginLeft: 8
    }
  }
})

interface FlashCardProps {
  id: string
  front: {
    /*Title to be displayed on front of flash card in header*/
    title?: string
    /*Content such as a question, a word to be defined, etc.*/
    content: string
  }
  back: {
    /*Title to be displayed on front of flash card in header*/
    title?: string
    /*Content such as a question, a word to be defined, etc.*/
    content: string
  }
}

const FlashCard: React.FC<FlashCardProps> = ({ id, front, back }) => {
  const classes = useStyles() // MATERIAL UI STYLING
  const dispatch = useDispatch()
  const { flipped } = useSelector((state: any) => state.flashCards)

  return (
    <div id={`Flash Card ${id + 1}`}>
      <Flip isFlipped={flipped} flipDirection="vertical">
        <Card
          className={classes.root}
          elevation={24} // MUI Box Shadow
          key="front"
          /* style={styles.card} */
          onClick={() => dispatch(flipFlashCard())}
        >
          <CardHeader
            action={
              <IconButton
                aria-label="delete"
                onClick={() => dispatch(deleteFlashCard())}
              >
                <DeleteIcon />
              </IconButton>
            }
            title={front.title}
            className={classes.root}
            /* style={styles.card.header} */
          />
          <CardContent>{front.content}</CardContent>
        </Card>

        <Card
          key="back"
          className={classes.root}
          elevation={24} // MUI Box Shadow
          /* style={styles.card} */
          onClick={() => dispatch(flipFlashCard())}
        >
          <CardHeader
            action={
              <IconButton
                aria-label="delete"
                onClick={() => dispatch(deleteFlashCard())}
              >
                <DeleteIcon />
              </IconButton>
            }
            title={back.title}
            className={classes.root}
            /* style={styles.card.header} */
          />
          <CardContent>{back.content}</CardContent>
        </Card>
      </Flip>
    </div>
  )
}

export default FlashCard
