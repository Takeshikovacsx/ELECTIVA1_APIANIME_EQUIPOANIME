import React, { useEffect, useState } from 'react'

const WindowResize = () => {

    const [width, setWidth]= useState(0);

    useEffect(() => {
    
    const updatewidth= () =>{
        const size = document.body.clientWidth
        console.log(size);

        setWidth (size)

    };
    updatewidth();
    window.addEventListener('resize', updatewidth)
      
    })
    



  return (
   <>
   <h2>Window resize component</h2>
   <p>
    <span> The page width : {width} </span>
   </p>
   </>
  )
}

export default WindowResize
