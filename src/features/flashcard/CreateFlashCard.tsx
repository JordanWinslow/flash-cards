import React from "react"
import Flip from "react-card-flip"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

import { flipFlashCard, createFlashCard } from "./flashCardSlice"

import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Grid
} from "@material-ui/core"
import { Center } from "../../components/Center"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"

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
}

interface FlashCard {
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

const CreateFlashCard: React.FC = () => {
  const dispatch = useDispatch()
  const { flipped } = useSelector((state: any) => state.flashCards)
  const { register, handleSubmit, errors } = useForm({
    validateCriteriaMode: "all"
  })
  const history = useHistory()

  const onSubmit = (data: any) => {
    dispatch(createFlashCard(data))
    history.goBack()
  }
  const preventFlip = (
    e:
      | React.MouseEvent<HTMLInputElement, MouseEvent>
      | React.MouseEvent<HTMLTextAreaElement, MouseEvent>
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
              style={styles.card}
              onClick={() => dispatch(flipFlashCard())}
            >
              <CardHeader
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
                  <input
                    type="text"
                    name="front.title"
                    placeholder="Front Title"
                    ref={register({ maxLength: 28 })}
                    onClick={preventFlip}
                  />
                }
                style={styles.card.header}
              />
              <CardContent>
                {
                  <textarea
                    name="front.content"
                    placeholder="Front Content"
                    ref={register({
                      required: "You Must Write at Least 1 Word",
                      minLength: {
                        value: 3,
                        message: "You Must Write at Least 1 Word"
                      },
                      maxLength: 1000
                    })}
                    onClick={preventFlip}
                  />
                }
              </CardContent>
            </Card>
            <Card
              key="back"
              style={styles.card}
              onClick={() => dispatch(flipFlashCard())}
            >
              <CardHeader
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
                  <input
                    type="text"
                    name="back.title"
                    placeholder="Back Title"
                    ref={register({ maxLength: 28 })}
                    onClick={preventFlip}
                  />
                }
                style={styles.card.header}
              />
              <CardContent>
                {
                  <textarea
                    name="back.content"
                    placeholder="Back Content"
                    ref={register({
                      required: "You Must Write at Least 1 Word",
                      minLength: 3,
                      maxLength: 1000
                    })}
                    onClick={preventFlip}
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
