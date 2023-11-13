import React, { useState,useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Commonapi(props) {
    const ct=props.category;
    const cy=props.country;
    const [datac, setdatac] = useState({
        statusc: '',
        totalResultsc: 0,
        articlesc: []
      });
    const apiurl = `https://newsapi.org/v2/top-headlines?country=${cy}&category=${ct}&apiKey=90dbc9b3c011415098f6821290162da9`;
    
    useEffect(() => {
      fetch(apiurl)
        .then((response) => response.json())
        .then((value) => {
          setdatac({
            statusc: value.status,
            totalResultsc: value.totalResults,
            articlesc: value.articles
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }, [apiurl]);
    // console.log(data);

    const navigate=useNavigate();


  return (
    <>
    <Row>
     {datac.articlesc?datac.articlesc.map((item,index)=>(
        <Col>
         <Card key={index} style={{ width: '18rem', boxShadow: '-1.2px 4px 0px rgb(76, 71, 71)',marginTop:"15px" }}>
         <Card.Img variant="top" src={item.urlToImage} alt="error in image loading" style={{width:"100%",minHeight:"240px",maxHeight:"240px"}}/>
         <Card.Body>
           <Card.Title>{item.title.slice(0,50)}</Card.Title>
           <Card.Text>
            {item.description?item.description.slice(0,75):null}
           </Card.Text>
           <a href={item.url} target="_blank" rel="noopener noreferrer">
            <Button variant='primary'>Read More</Button>
        
        </a>
         </Card.Body>
       </Card></Col>
     )):(<p>fetching data</p>)}

     </Row>
       
       </>
  )
}

export default Commonapi
