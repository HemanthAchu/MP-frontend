import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getsHistoryAPI,removeHistoryAPI  } from '../services/allAPI.JS'

function WatchHistory() {
  const [history,setHistory] = useState([])
  useEffect(()=>{
getHistory()
  },[])
  const getHistory = async ()=>{
    const result = await getsHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }else{
      console.log("API Failed");
      console.log(result.message);
    }
  }
  const removeHistoryItem = async (id)=>{
    await  removeHistoryAPI(id)
    getHistory()
  }
  return (
    <>
      <div className='d-flex justify-content-between container'>
      <h2 className='m-5' style={{height:'80px'}}>
        Watchhistory
      </h2>
      <Link to={'/home'} className='d-flex m-5 text-decoration-none' style={{color:"white",fontSize:"30px"}}>  <i class="fa-solid fa-arrow-left m-2"></i>BackTo Home</Link>
      </div>

      <Table striped bordered hover size="sm" className='container shadow'> 
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date&Time</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {history?.length>0? history?.map((video,index)=>(
          <tr>
          <td>{index+1}</td>
          <td>{video?.caption}</td>
          <td><a  href={video?.link} target='_blank'>{video?.link}</a></td>
          <td>{video?.timestamp}</td>
          <td><button className='btn' onClick={()=>removeHistoryItem(video?.id)}><i className="fa-solid fa-trash text-danger"></i></button></td>
        </tr>
        )):<p>Sometime wrong</p>}
       
        
      </tbody>
    </Table>
    </>
  )
}

export default WatchHistory
