/* import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { createFlashCard, flipFlashCard } from "./flashCardSlice"

import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  CardContent
} from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"

const styles = {
  card: {
    background:
      "linear-gradient(45deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 50%,rgba(169, 169, 169,0.04) 50%, rgba(169, 169, 169,0.04) 71%,rgba(251, 251, 251,0.04) 71%, rgba(251, 251, 251,0.04) 100%), linear-gradient(45deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 56%,rgba(169, 169, 169,0.04) 56%, rgba(169, 169, 169,0.04) 67%,rgba(251, 251, 251,0.04) 67%, rgba(251, 251, 251,0.04) 100%), linear-gradient(135deg, rgba(86, 86, 86,0.04) 0%, rgba(86, 86, 86,0.04) 4%,rgba(169, 169, 169,0.04) 4%, rgba(169, 169, 169,0.04) 75%,rgba(251, 251, 251,0.04) 75%, rgba(251, 251, 251,0.04) 100%), linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))",
    color: "#EEEEEE",
    boxShadow: "0 4px 20px rgba(0,0,0, 0.5)",
    header: {
      background:
        "radial-gradient(circle at 17% 1%, rgba(198, 198, 198,0.03) 0%, rgba(198, 198, 198,0.03) 50%,rgba(42, 42, 42,0.03) 50%, rgba(42, 42, 42,0.03) 100%),radial-gradient(circle at 8% 81%, rgba(253, 253, 253,0.03) 0%, rgba(253, 253, 253,0.03) 50%,rgba(36, 36, 36,0.03) 50%, rgba(36, 36, 36,0.03) 100%),radial-gradient(circle at 83% 29%, rgba(164, 164, 164,0.03) 0%, rgba(164, 164, 164,0.03) 50%,rgba(60, 60, 60,0.03) 50%, rgba(60, 60, 60,0.03) 100%),radial-gradient(circle at 96% 62%, rgba(170, 170, 170,0.03) 0%, rgba(170, 170, 170,0.03) 50%,rgba(169, 169, 169,0.03) 50%, rgba(169, 169, 169,0.03) 100%),linear-gradient(338deg, rgb(2, 141, 213),rgb(5, 172, 81))"
    }
  }
}

const CardList: React.FC = () => {
  const dispatch = useDispatch()
  const { cards } = useSelector((state: any) => state.flashCards)

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        {cards.map((cardInfo: any) => {
          return (
            <Grid item xl={3}>
              <Card style={styles.card}>
                <CardHeader
                  action={
                    <IconButton aria-label="favorite">
                      <FavoriteIcon />
                    </IconButton>
                  }
                  title={cardInfo.front.title}
                  style={styles.card.header}
                />
                <CardContent onClick={() => dispatch(flipFlashCard())}>
                  {cardInfo.front.content}
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default CardList
 */
let nothing = ""
export default nothing
