import React, {useState, useEffect} from "react"; 
import axios from "axios";
import StarData from './StarData';
import { Container, Row } from "reactstrap";


export default function StarsData() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response =>{
             console.log(response.data.results);
             setPeople(response.data.results);
        })
        .catch(error => {
            console.log("Data ERROR!", error);
        })
    }, []);

return(

<Container>
      <Row>

      {people.map(item => {
              return <StarData characterName = {item.name} heightCh= {item.height} gender = {item.gender} />  ;
              })}
       
      </Row>
    </Container>
       
);

};   