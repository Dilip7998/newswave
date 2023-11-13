import React, { useState ,useEffect} from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Alert } from 'react-bootstrap';

function Searchpage( ) {
    // const navigate=useNavigate();
    const datainput=useLocation().state.value;
    const [error,seterror]=useState();
  
   

 
  
    // console.log(datainput);
    const [data, setdata] = useState({
        status: '',
        totalResults: 0,
        articles: []
      });
    const apiurl = `https://newsapi.org/v2/everything?q=${datainput}&apiKey=d596a4cac8f54ca49609ef857d9c058a`;
    
    useEffect(() => {
      if (typeof datainput === 'undefined' || datainput.trim() === "") {
        seterror("You didn't entered anything");
        setdata({
          status: null,
          totalResults: null,
          articles: null,
        });
        // console.log("inside if");
      } 
      else{
      fetch(apiurl)
        .then((response) =>{
        // console.log(response)
         return response.json()})
        .then((value) => {
          // console.log("value",value);
          // const inputWords = datainput.split(' ');
          // console.log("input",inputWords);
          const filteredArticles = value.articles;
         
          
          
            
            if(filteredArticles.length>1){
              setdata({
                status: value.status,
                totalResults: filteredArticles.length,
                articles: filteredArticles
              });
             
            }
            else{
              // console.log("error");
              setdata({
                status: null,
                totalResults: null,
                articles: null
              });
              seterror("We don't have any information about "+ datainput)
              
            }

           
        })
        .catch((error) => {
          console.log(error);
        });}
    }, [apiurl]);
    const ct=null;

  return (
   <>
   <h3>Searched results on {datainput}</h3>
   
   <Row>
       {
        data.articles?data.articles.map((item,index)=>(
          <Col key={index} > <Card style={{ width: '18rem' ,boxShadow:"-1px 2px 0px black",marginTop:"10px"}}>
          <Card.Img variant="top" src={item.urlToImage} alt='error in image loading' style={{width:"100%",minHeight:"240px",maxHeight:"240px"}} />
          <Card.Body>
            <Card.Title>{item.title?item.title.slice(0,50):"No title"}</Card.Title>
            <Card.Text>
             {item.description?item.description.slice(0,60):"No description available"}
            </Card.Text>
            <a href={item.url} target='_blank'><Button variant="primary" >Know More</Button></a>
            
          </Card.Body>
        </Card></Col>
        )):(
       
          <Alert variant='danger'>
            <Alert.Heading>Oh No! You got an error!</Alert.Heading>
          <p style={{fontSize:'24px'}}>{error}</p>
          <hr />
        </Alert>
      
      )
       }
       
      </Row>
   </>
  )
}

export default Searchpage
