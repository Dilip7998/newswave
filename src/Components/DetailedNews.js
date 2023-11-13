import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DetailedNews() {
    const data=useLocation().state.values;
    // console.log(data);
    const ct=useLocation().state.cat.ct;
    
    // console.log(ct);
    const navigate=useNavigate();
 
    
  return (
    <>
    {/* <h2>details page</h2> */}
     <Card className="text-center">
      
      <Card.Body>
        <Card.Title style={{fontSize:"24px",fontWeight:"500"}}>{data.title}</Card.Title>
        <Card.Img variant="top" src={data.urlToImage} alt='error in loading' style={{width:"100%",minHeight:"240px",maxHeight:"800px",height:`${Math.max(400, window.innerHeight * 0.6)}px`}} />

        <Card.Text style={{fontSize:"18px"}}>
          {data.description?data.description:"No description is available"}
        </Card.Text>
        <Card.Text style={{fontSize:"18px"}}>{data.content ? data.content.slice(0, data.content.length - 13) : null}
</Card.Text>
      {ct?  <Button variant="primary" onClick={()=>{
navigate(`/${ct}`);
        }}>Back to {ct}</Button>:null}
      </Card.Body>
      
    </Card>

    </>
  )
}

export default DetailedNews
