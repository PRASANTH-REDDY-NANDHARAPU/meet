import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Addmeet=()=>{
  const navigate=useNavigate()
  const [alert,setalert]=useState()
  const [btn,setbtn]=useState("ADD MEET")
    const title=useRef()
    const img=useRef()
    const date=useRef()
    const des=useRef()

    function pushData(){
       const titleName=title.current.value
       const imgName=img.current.value
       const dateName=date.current.value
       const desName=des.current.value
       if(titleName == '' || imgName == '' || dateName == '' ||desName == ''){
           const showAlert="plzz fill all the feilds!!"
           setalert(showAlert)
       }
       else{
        const meetObject={
          meetName:titleName,
          meetImg:imgName,
          meetDate:dateName,
          meetDescription:desName
       }

       fetch("https://stnupmeet-default-rtdb.firebaseio.com/stnupmeet.json",{
        method:'post',
        body:JSON.stringify(meetObject)
       }).then(()=>{
          const btnNEW="ADDED😁"
          setbtn(btnNEW)
          const empty=''
          setalert(empty)
          navigate('/')
       })
       }
      
    }
    
    return <div className="m-meet">
      <div className="meet-container">
        <h1>Add your meeting details!!</h1>
        <input className="u-data" type="text" placeholder="Enter meet name.." ref={title}></input>
        <input className="u-data" type="text" placeholder="Enter image name.." ref={img}></input>
        <input className="u-data" type="datetime-local" ref={date}></input>
        <textarea className="text" id="w3review" placeholder="Enter your description.... " ref={des} name="w3review" rows="3" cols="50"></textarea>
        <p className="alert">{alert}</p>
        <button className="btn" onClick={pushData}>{btn}</button>
      </div>
    </div>
  }
  export default Addmeet;