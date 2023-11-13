import React ,{useState,useEffect}from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'Components/images';

function Breaking() {
  const [data, setdata] = useState({
    status: '',
    totalResults: 0,
    articles: []
  });
const apiurl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=36674602dac94f06abb2a8f4141e05d0";

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
const apiurl1 = "https://newsapi.org/v2/top-headlines?country=in&apiKey=90dbc9b3c011415098f6821290162da9";

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
const apiurl2 = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=90dbc9b3c011415098f6821290162da9";

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


    const item=" INDIA WON BY 6 WICKET";
  return (
  <>
  {/* <h2>this is breaking news</h2> */}
  <div className="both"><div className="firstitem">
  <div className="breakingscroll">
  <div className="marque"><marquee behavior="" scrollamount="12" direction=""> Breaking News    ....  {
    data2.articles2.map((items2)=>(
     <span key={items2} style={{marginInline:"15px"}} >{items2.title } , </span> 
     

    ))
  } </marquee></div>

  <Carousel interval={7000} pause={false} >
    {
    data1.articles1.map((item,index)=>(
        <Carousel.Item >
        <img
          className="d-block w-100 "
          src={item.urlToImage}
          alt="error in"
        />
        <Carousel.Caption>
          <h3>{item.title} </h3>
          <p>{item.description} </p>
        </Carousel.Caption>
      </Carousel.Item>  
     ))
  } *
      
     
    </Carousel>
  </div>
    </div>
    < div className="seconditem">
      <div className="headlinetitle">Top headlines </div>
    
      <ul >
        {data.articles.map((item,index) => (
          <li className="item" key={index}>
            {index+1} . {item.title}
          </li>
        ))}
      </ul>
    
      </div>
      </div>
  
  
  </>
  );
}

export default Breaking
