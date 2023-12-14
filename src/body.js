import { useEffect, useState } from "react";
const Card=(props)=>{
  return<div className="card">
    <img className="c-img" src={"https://source.unsplash.com/1600x800/?"+props.data.meetImg}></img>
    <h3>{props.data.meetName}</h3>
    <h4>{props.data.meetDate}</h4>
    <p>{props.data.meetDescription}</p>
  </div>
}
const Allmeets=()=>{
  const [meets,setmeets]=useState([])
   async function Metadata(){
      const data=await fetch('https://stnupmeet-default-rtdb.firebaseio.com/stnupmeet.json')
      const originalData=await data.json()
      console.log(originalData) 
      const array=[]
      for (let key in originalData) {
        if (originalData.hasOwnProperty(key)) {
          array.push(originalData[key]);
        }
      }
      setmeets(array)
  }
  useEffect(()=>{
    Metadata()
  },[])
    return <div>
      <h1 className="center">welcome back to all your meetings!!</h1>
      <div className="body">
        {
          meets.map((x)=>{
            return <Card data={x}/>
          })
        }
    </div>
    </div>
  }
  export default Allmeets;