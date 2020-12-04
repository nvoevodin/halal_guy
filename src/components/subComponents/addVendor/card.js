
import {Card} from 'react-bootstrap'

import classes from './card.module.css'


const GuideCard = (props) => {
   
        return(

<Card className={classes.cardClass}>
  <Card.Body>
    <Card.Title style = {{borderRadius: '50%',width: 45, height: 45, padding: 10, border: '1px solid #000',textAlign: 'center'}}>{props.description + 1}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>

  </Card.Body>
</Card>
            
        )
    
}

export default GuideCard;