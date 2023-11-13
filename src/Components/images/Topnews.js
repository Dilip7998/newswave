import React , { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate,Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


function Topnews() {
  
    const navigate=useNavigate();
    const [data, setdata] = useState({
        status: '',
        totalResults: 0,
        articles: []
      });
    const apiurl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d596a4cac8f54ca49609ef857d9c058a";
    
    useEffect(() => {
      fetch(apiurl)
        .then((response) => response.json())
        .then((value) => {
          setdata({
            status: value.status,
            totalResults: value.totalResults,
            articles: value.articles
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }, [apiurl]);
    
    // Use a separate useEffect to see the updated state
    const [data1, setdata1] = useState({
      status1: '',
      totalResults1: 0,
      articles1: []
    });
    const apiurl1 = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d596a4cac8f54ca49609ef857d9c058a";
    
    useEffect(() => {
    fetch(apiurl1)
      .then((response) => response.json())
      .then((value) => {
        setdata1({
          status1: value.status,
          totalResults1: value.totalResults,
          articles1: value.articles
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }, [apiurl1]);
    
    // Use a separate useEffect to see the updated state
    const [data2, setdata2] = useState({
      status2: '',
      totalResults2: 0,
      articles2: []
    });
    const apiurl2 = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d596a4cac8f54ca49609ef857d9c058a";
    
    useEffect(() => {
    fetch(apiurl2)
      .then((response) => response.json())
      .then((value) => {
        setdata2({
          status2: value.status,
          totalResults2: value.totalResults,
          articles2: value.articles
        });
      })
      .catch((error) => {
        console.log(error);
      });
    }, [apiurl2]);
    
    const [datat, setdatat] = useState({
        statust: '',
        totalResultst: 0,
        articlest: []
      });
    const apiurlt = "https://newsapi.org/v2/everything?sources=bbc-news&apiKey=d596a4cac8f54ca49609ef857d9c058a";
    
    useEffect(() => {
      fetch(apiurlt)
        .then((response) => response.json())
        .then((value) => {
          setdatat({
            statust: value.status,
            totalResultst: value.totalResults,
            articlest: value.articles
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }, [apiurlt]);
  
    // Use a separate useEffect to see the updated state
    // useEffect(() => {
    //   console.log(data);
    // }, [data]);
    const ct="";
    
  return (
   
   <>
    {/* <h2>this is breaking news</h2> */}
  <div className="both"><div className="firstitem">
  <div className="breakingscroll">
  <div className="marque"><marquee behavior="" scrollamount="12" direction=""> Breaking News    ....  {
    data2?data2.articles2?data2.articles2.map((items2)=>(
     <span key={items2} style={{marginInline:"15px"}} >{items2.title } , </span> 
     

    )):(<p>fetching from api</p>):(<p>fetching from api </p>)
  } </marquee></div>

  <Carousel interval={7000} pause={false}  >
    { data1.articles1?
    data1.articles1.map((item,index)=>(
        <Carousel.Item key={index} >
       <a href={item.url} target='_blank'>
       <img 
          className="d-block w-100 "
          src={item.urlToImage}
          alt="error in"
        />
       </a>
        <Carousel.Caption>
          <h3>{item.title} </h3>
          <p>{item.description} </p>
        </Carousel.Caption>
      </Carousel.Item>  
     )):(<p>fetching data</p>)
  } 
      
     
    </Carousel>
  </div>
    </div>
    < div className="seconditem">
      <div className="headlinetitle">Top headlines </div>
    
      <ul >
        {data.articles?data.articles.map((item,index) => (
          <a key={index} href={item.url} target='_blank' style={{textDecoration:"none",color:'black'}}> <li  className="item"   >
          {index+1} . {item.title}
        </li></a>
          
        )):(<p>fetching data from api</p>)}
      </ul>
    
      </div>
      </div>
  

   
   
   <Container className='topnewscontainer' style={{ maxWidth: '100vw' }} >
   <h1>Top News From BBC</h1>
      <Row>
       {datat.articlest?datat.articlest.map((item,index)=>(
         <Col key={index} > <Card className='Cardshadow' style={{ width: '18rem', marginTop:"20px" }}>
         <Card.Img variant="top" src={item.urlToImage} style={{width:"100%",minHeight:"240px",maxHeight:"240px"}} />
         <Card.Body>
           <Card.Title>{item.title}</Card.Title>
           <Card.Text>
            {item.description.slice(0,60)}
           </Card.Text>
           <a href={item.url} target="_blank" rel="noopener noreferrer">
            <Button variant='primary'>Read More</Button>
        
        </a>
          
          
         </Card.Body>
       </Card></Col>
       )):(<p>fetching from api</p>)
      }
       
      </Row>
    </Container>
    
   
   </>
  )
}

export default Topnews
