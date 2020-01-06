/*
Author: Jordan Winslow
Website: https://JordanWinslow.dev
License: Attribution-NonCommercial-ShareAlike 4.0 International
https://creativecommons.org/licenses/by-nc-sa/4.0/
*/
import React from "react"
import Flip from "react-card-flip"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

import { flipFlashCard, createFlashCard, CardState } from "./flashCardSlice"

import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Grid,
  TextField,
  makeStyles
} from "@material-ui/core"

import { Center } from "../../components/Center"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"

import { RootState } from "../../redux/store" // Type declaration

/* 
MANUALLY OVERRIDING THE STYLES IS LESS VERBOSE BUT REQUIRES PASSING IN InputProps & InputLabelProps AND WILL NOT ALLOW FINE-TUNING:

const styles = {
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
      background:
        "radial-gradient(circle at 17% 1%, rgba(198, 198, 198,0.03) 0%, rgba(198, 198, 198,0.03) 50%,rgba(42, 42, 42,0.03) 50%, rgba(42, 42, 42,0.03) 100%),radial-gradient(circle at 8% 81%, rgba(253, 253, 253,0.03) 0%, rgba(253, 253, 253,0.03) 50%,rgba(36, 36, 36,0.03) 50%, rgba(36, 36, 36,0.03) 100%),radial-gradient(circle at 83% 29%, rgba(164, 164, 164,0.03) 0%, rgba(164, 164, 164,0.03) 50%,rgba(60, 60, 60,0.03) 50%, rgba(60, 60, 60,0.03) 100%),radial-gradient(circle at 96% 62%, rgba(170, 170, 170,0.03) 0%, rgba(170, 170, 170,0.03) 50%,rgba(169, 169, 169,0.03) 50%, rgba(169, 169, 169,0.03) 100%),linear-gradient(338deg, rgb(2, 141, 213),rgb(5, 172, 81))"
    }, //BOTTOM CONTENT OF FLASHCARD
    "& .MuiCardContent-root": {
      background:
        "linear-gradient(45deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 50%,rgba(169, 169, 169,0.04) 50%, rgba(169, 169, 169,0.04) 71%,rgba(251, 251, 251,0.04) 71%, rgba(251, 251, 251,0.04) 100%), linear-gradient(45deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 56%,rgba(169, 169, 169,0.04) 56%, rgba(169, 169, 169,0.04) 67%,rgba(251, 251, 251,0.04) 67%, rgba(251, 251, 251,0.04) 100%), linear-gradient(135deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 4%,rgba(169, 169, 169,0.04) 4%, rgba(169, 169, 169,0.04) 75%,rgba(251, 251, 251,0.04) 75%, rgba(251, 251, 251,0.04) 100%), linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))",
      color: "#EEEEEE",
      minHeight: "25vh"
    }, //NORMAL BORDER COLOR
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255,255,255, 0.5)"
    }, //HOVER BORDER COLOR
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#EEEEEE"
    }, //FOCUSED BORDER COLOR
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FFFFFF"
    }, //INPUT TEXT COLOR
    "& .MuiOutlinedInput-root": {
      color: "#EEEEEE"
    }, //INPUT LABEL TEXT COLOR
    "& .MuiInputLabel-root": {
      color: "#EEEEEE"
    }, //CHECKMARK COLOR
    "& .MuiButtonBase-root": {
      color: "white"
    }, //CHECKMARK ALIGNMENT
    "& .MuiCardHeader-action": {
      alignSelf: "auto",
      marginTop: 0,
      marginLeft: 8
    }
  }
})

const CreateFlashCard: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { flipped } = useSelector((state: RootState) => state.flashCards)
  const { register, handleSubmit, errors } = useForm<CardState>({
    validateCriteriaMode: "all"
  })
  const history = useHistory()

  const onSubmit = (data: CardState) => {
    dispatch(createFlashCard(data))
    history.goBack()
  }
  const preventFlip = (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => e.stopPropagation()

  console.log(errors)

  return (
    <Center>
      <Grid item xs={10} sm={8} md={6} xl={4}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flip isFlipped={flipped} flipDirection="vertical">
            <Card
              key="front"
              className={classes.root}
              elevation={24} // MUI Box Shadow
              /* style={styles.card} */
              onClick={() => dispatch(flipFlashCard())}
            >
              <CardHeader
                className={classes.root}
                action={
                  <IconButton
                    type="submit"
                    aria-label="submit"
                    onClick={preventFlip}
                  >
                    <CheckCircleIcon className={classes.root} />
                  </IconButton>
                }
                title={
                  <TextField
                    className={classes.root}
                    /* 
                    For manual style overrides, comment out className and use below method:
                    
                    style={styles.card.header}
                    InputProps={{
                    style: styles.input.textfield
                    }}
                    InputLabelProps={{ style: styles.input.textfield }} 
                    */
                    fullWidth
                    label="Front Title"
                    variant="outlined"
                    name="front.title"
                    onClick={preventFlip}
                    inputRef={register({
                      maxLength: 40
                    })}
                  />
                }
              />
              <CardContent>
                {
                  <TextField
                    className={classes.root}
                    fullWidth
                    multiline
                    rows={6}
                    label="Front Content"
                    variant="outlined"
                    name="front.content"
                    onClick={preventFlip}
                    inputRef={register({
                      required: "You Must Write at Least 1 Word",
                      minLength: {
                        value: 3,
                        message: "You Must Write at Least 1 Word"
                      },
                      maxLength: 1000
                    })}
                  />
                }
              </CardContent>
            </Card>
            <Card
              key="back"
              className={classes.root}
              elevation={24} // MUI Box Shadow
              /* style={styles.card} */
              onClick={() => dispatch(flipFlashCard())}
            >
              <CardHeader
                className={classes.root}
                action={
                  <IconButton
                    type="submit"
                    aria-label="submit"
                    onClick={preventFlip}
                  >
                    <CheckCircleIcon />
                  </IconButton>
                }
                title={
                  <TextField
                    className={classes.root}
                    /* 
                    For manual style overrides, comment out className and use below method:
                    
                    style={styles.card.header}
                    InputProps={{
                    style: styles.input.textfield
                    }}
                    InputLabelProps={{ style: styles.input.textfield }} 
                    */
                    fullWidth
                    label="Back Title"
                    variant="outlined"
                    name="back.title"
                    onClick={preventFlip}
                    inputRef={register({
                      maxLength: 40
                    })}
                  />
                }
              />
              <CardContent>
                {
                  <TextField
                    className={classes.root}
                    fullWidth
                    multiline
                    rows={6}
                    label="Back Content"
                    variant="outlined"
                    name="back.content"
                    onClick={preventFlip}
                    inputRef={register({
                      required: "You Must Write at Least 1 Word",
                      minLength: {
                        value: 3,
                        message: "You Must Write at Least 1 Word"
                      },
                      maxLength: 1000
                    })}
                  />
                }
              </CardContent>
            </Card>
          </Flip>
        </form>
      </Grid>
    </Center>
  )
}

export default CreateFlashCard
