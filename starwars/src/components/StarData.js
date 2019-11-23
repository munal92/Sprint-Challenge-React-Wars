import React, { Component } from 'react';
import {Card, CardTitle,CardHeader, CardText,Col,CardDeck} from 'reactstrap';

const StarCard = props => {

    
    return(
         
     <Col xs="6" md="4" lg="3">
          <CardDeck>
           <Card body bg="info" text="white" style={{ width: '18rem' }}>
           <CardHeader className="red-bg">{props.characterName}</CardHeader>
           
           <CardText>{props.characterName}'s  Height: {props.heightCh}, Gender :{props.gender}.</CardText>           
            </Card>
        
            </CardDeck>

           </Col>
    )
}
export default StarCard; 