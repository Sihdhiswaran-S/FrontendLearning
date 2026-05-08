import React from 'react'
import "./style/Imagebar.css"
function ImageBar(props) {
  console.log("u have a props",props);
  
  let movidedata=props.movies.map(movie => {
    return (
      <>
      <img  className="image" src={movie.image} alt="" />
      </>
    );
  })
  return (
    <div className='main'>
       <div className="banner">{movidedata}</div>    
    </div>
  )
}

export default ImageBar
